/**
 * Sequelize Config
 * @see https://sequelize.org/v5/manual/dialects.html
 */
export default {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_ENGINE || 'postgres',
    // "operatorsAliases": false,
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_ENGINE || 'postgres',
    logging: false, // remove logs
    // "operatorsAliases": false
  },
  staging: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_ENGINE || 'postgres',
    // "operatorsAliases": false,
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: process.env.DB_ENGINE || 'postgres',
    logging: false, // remove logs
    // "operatorsAliases": false,
    // "ssl": true,
    // "dialectOptions": {
    //  "ssl": {
    //    "require": true
    //  }
    // }
  },
};
