import dotenv from 'dotenv';

import Logger from './infrastructure/logger';
// import Redis from './infrastructure/orm/redis';
import Mongoose from './infrastructure/orm/mongoose';
import Sequelize from './infrastructure/orm/sequelize';

import Server from './interfaces/webserver/server';

dotenv.config();

// Start server
const start = async () => {
  try {
    Logger.log(`** Application: ${process.env.APP_NAME}`);
    Logger.log(`** Run Environment: ${process.env.NODE_ENV}`);

    // Redis().start();
    await Mongoose();
    await Sequelize.authenticate();

    Server().start();
  } catch (err) {
    Logger.error(err);
  }
};

start();
