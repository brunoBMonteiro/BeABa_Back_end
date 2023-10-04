'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivelpermissao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Nivelpermissao.init({
    id_usuario: DataTypes.INTEGER,
    id_permissao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Nivelpermissao',
  });
  return Nivelpermissao;
};