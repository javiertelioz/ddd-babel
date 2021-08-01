import dotenv from 'dotenv';

// import Redis from './infrastructure/orm/redis';
import Mongoose from './infrastructure/orm/mongoose';
import Sequelize from './infrastructure/orm/sequelize';

import Server from './interfaces/webserver/server';

dotenv.config();

// Start server
const start = async () => {
  try {
    console.log(`** Application: ${process.env.APP_NAME}`);
    console.log(`** Run Environment: ${process.env.NODE_ENV}\n`);

    // Redis().start();
    await Mongoose();
    await Sequelize.authenticate();

    Server().start();
  } catch (err) {
    console.log(err);
  }
};

start();
