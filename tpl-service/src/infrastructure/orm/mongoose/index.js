import { connect, version } from 'mongoose';

/**
 * Start mongo server
 * @async
 * @returns {void}
 */
const start = async () => {
  try {
    const OPTIONS = {
      poolSize: 10,
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    };

    await connect(process.env.MONGO_URI, OPTIONS);

    console.log(`💽 MongoDB\t ${process.env.MONGO_URI}`);
    console.log(`\t Version\t ${version}\n`);
  } catch (error) {
    console.log('database connection failed. exiting now...');
  }
};

export default start;
