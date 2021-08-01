'use strict';

const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(({ connection }) => {
      const { name, readyState } = connection;
      console.info(
        '💽 Mongoose\n',
        `\tDatabase:\t ${name}\n`,
        `\tStatus: \t ${readyState}\n`,
        `\tVersion Drive:\t ${mongoose.version}\n`
      );
      return;
    })
    .catch(error => {
      console.log('database connection failed. exiting now...');
      console.error(error);
      // process.exit(1);
    });
};
