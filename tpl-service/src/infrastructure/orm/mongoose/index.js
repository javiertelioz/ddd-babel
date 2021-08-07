import { connect, version } from 'mongoose';

import Logger from '../../logger';

/**
 * Start mongo server
 * @async
 * @returns {void}
 */
const start = async () => {
  Logger.log(`💽 MongoDB ${process.env.MONGO_URI}`);
  Logger.log(`Version ${version}`);

  try {
    const OPTIONS = {
      poolSize: 10,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };

    await connect(process.env.MONGO_URI, OPTIONS);
  } catch (error) {
    Logger.error(`Database connection failed. error ${error}`);
  }
};

export default start;
