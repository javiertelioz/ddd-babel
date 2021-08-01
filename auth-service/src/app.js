require('dotenv').config();
require('./config/database').connect();

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const winston = require('winston');
const expressWinston = require('express-winston');

const User = require('./model/user');
const auth = require('./middleware/auth');

const app = express();

app.use(express.json({ limit: '50mb' }));

app.post('/api/v1/users/register', async (req, res) => {
  try {
    // Get user input
    const { firstName, lastName, email, password } = req.body;

    // Validate user input
    if (!(email && password && firstName && lastName)) {
      res.status(400).send({
        message: 'All input is required'
      });
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send({
        message: 'user already exists, check that it is not disabled.'
      });
    }

    //Encrypt user password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      firstName,
      lastName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword
    });

    // Create token
    const token = jwt.sign({ user_id: user._id, email }, process.env.APP_JWT_SECRET, {
      expiresIn: process.env.APP_JWT_TIME || '2h'
    });
    // save user token
    user.token = token;

    // return new user
    res.status(201).json({
      message: 'user has been created successfully'
    });
  } catch (err) {
    console.log(err);
  }
});

app.post('/api/v1/users/login', async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send({
        message: 'All input is required'
      });
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email, firstName: user.firstName, lastName: user.lastName },
        process.env.APP_JWT_SECRET,
        {
          expiresIn: process.env.APP_JWT_TIME || '2h'
        }
      );

      // save user token
      user.token = token;

      // user
      return res.status(200).json({
        token
      });
    }
    res.status(400).json({ message: 'Invalid Credentials' });
  } catch (err) {
    console.log(err);
  }
});

app.get('/api/v1/users/welcome', auth, (req, res) => {
  const { firstName, lastName } = req.user;
  res.status(200).send({ message: `Welcome ${firstName} ${lastName} 🙌` });
});

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server'
    }
  });
});

app.use(
  expressWinston.logger({
    level: 'debug',
    meta: true,
    colorize: true,
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
  })
);
app.use(
  expressWinston.errorLogger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.json())
  })
);

module.exports = app;
