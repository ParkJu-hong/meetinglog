'use strict';
const {
  Model
} = require('sequelize');
const db = require('./log');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(db.log, { foreignKey: '', sourceKey: 'id'});
    }
  }
  user.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    aboutself: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};