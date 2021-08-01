import dotenv from 'dotenv';
import express, { json, urlencoded } from 'express';

import morgan from 'morgan';
import { transports, format } from 'winston';

import { logger, errorLogger } from 'express-winston';

import Pet from './model/pet';
import auth from './middleware/auth';

require('./config/database').init();

dotenv.config();

const app = express();

app.use(json({ limit: '50mb' }));
app.use(urlencoded({ extended: false }));
app.use(morgan('dev'));

app.post('/api/v1/pets', auth, async (req, res) => {
  console.log(req);

  try {
    // Get pet input
    const { user_id } = req.user;
    const { name, description, image, status, dob, address } = req.body;

    // Validate user input
    if (!(name && user_id)) {
      res.status(400).send({
        message: 'All input is required',
      });
    }

    // check if user already exist
    // Validate if user exist in our database
    const existPet = await Pet.findOne({ user: user_id, name });

    if (existPet) {
      return res.status(409).send({
        message: 'pet already exists.',
      });
    }

    // Create pet in our database
    await Pet.create({
      name,
      description,
      image,
      user: user_id,
      status,
      dob,
      address,
    });

    res.status(201).json({
      message: 'pet has been created successfully',
    });
  } catch (err) {
    console.log(err);
  }
});

app.get('/api/v1/pets/:pet', auth, (req, res) => {
  const { id } = req.user.id;
  const { pet } = req.params;

  Pet.find({ user: id, _id: pet }, (err, petStored) => {
    if (err) {
      return res.status(500).json({
        message: 'there was an error creating the pet',
      });
    }

    if (petStored === null) {
      return res.status(404).json({
        message: 'The pet was not found',
      });
    }

    return res.status(200).json({
      data: petStored,
    });
  });

  const { firstName, lastName } = req.user;
  res.status(200).send({ message: `Welcome ${firstName} ${lastName} 🙌` });
});

// This should be the last route else any after it won't work
app.use('*', (req, res) => {
  console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
  res.status(404).json({
    success: 'false',
    message: 'Page not found',
    error: {
      statusCode: 404,
      message: 'You reached a route that is not defined on this server',
    },
  });
});

app.use(
  logger({
    level: 'debug',
    meta: true,
    colorize: true,
    transports: [new transports.Console()],
    format: format.combine(format.colorize(), format.json()),
  })
);
app.use(
  errorLogger({
    transports: [new transports.Console()],
    format: format.combine(format.colorize(), format.json()),
  })
);

export default app;
