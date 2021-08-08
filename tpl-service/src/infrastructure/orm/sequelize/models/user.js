/**
 * A Model represents a table in the database.
 * Instances of this class represent a database row.
 *
 * @class
 * @classdesc User model
 * @param {object} sequelize Sequelize instance
 * @param {object} DataTypes Sequelize dataTypes
 * @returns {object} User model
 */
const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'user',
    {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      firstname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      picture: {
        type: DataTypes.STRING,
      },
      phone: {
        allowNull: true,
        type: DataTypes.STRING(14),
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female'],
      },
      birthday: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      // options
      paranoid: true,
      underscored: true,
      comment: 'User Table',
      hooks: {},
    }
  );

  // Uncomment for enable relationships
  // User.associate = ({}) => {};

  return User;
};

export default UserModel;
