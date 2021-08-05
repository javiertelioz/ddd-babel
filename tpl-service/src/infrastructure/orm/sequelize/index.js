// import { readdirSync } from 'fs';
// import { basename as _basename, join } from 'path';

import Sequelize from 'sequelize';

import sequelizeConfig from './config';

// const db = {};
// const basename = _basename(__filename);
const config = sequelizeConfig[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

/*readdirSync(join(__dirname, "models"))
  .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" )
  .forEach((file) => {
    const model = require(join(__dirname, "models", file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});*/

export default sequelize;

/**
 * Start mongo server
 */
/*const start = async () => {
  try {
    const config = sequelizeConfig[process.env.NODE_ENV || 'development'];
    const sequelize = new Sequelize(config.database, config.username, config.password, config);

    return {
      sequelize,
      start: () => {
        await sequelize.authenticate();
      },
    };


    await connect(process.env.MONGO_URI, OPTIONS);

    console.log(`💽 MongoDB\t ${process.env.MONGO_URI}`);
    console.log(`\t Version\t ${version}\n`);
  } catch (error) {
    console.log('database connection failed. exiting now...');
  }
};

export default start;
*/
