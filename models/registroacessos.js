'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registroacessos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registroacessos.init({
    id_usuario: DataTypes.INTEGER,
    id_arquivo_acessado: DataTypes.INTEGER,
    data_hora_acesso: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Registroacessos',
  });
  return Registroacessos;
};