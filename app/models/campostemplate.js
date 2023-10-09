'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campostemplate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Campostemplate.init({
    id_campo: DataTypes.INTEGER,
    nome_campo: DataTypes.STRING,
    tipo_dado_esperado: DataTypes.STRING,
    nulo: DataTypes.STRING,
    id_template_associado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Campostemplate',
  });
  return Campostemplate;
};