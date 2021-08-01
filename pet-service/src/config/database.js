import { connect, version } from 'mongoose';

const { MONGO_URI } = process.env;

/**
 * Start Mongo Connection
 * @returns {void}
 */
export function init() {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  };

  connect(MONGO_URI, options)
    .then(({ connection }) => {
      const { name, readyState } = connection;
      console.info(
        '💽 Mongoose\n',
        `\tDatabase:\t ${name}\n`,
        `\tStatus: \t ${readyState}\n`,
        `\tVersion Drive:\t ${version}\n`
      );
      return;
    })
    .catch(error => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      // process.exit(1);
    });
}
