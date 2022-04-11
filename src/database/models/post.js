'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  post.init({
    userid: DataTypes.STRING,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    reactions: DataTypes.STRING,
    date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'post',
  });
  return post;
};