'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    id_usuario: DataTypes.INTEGER,
    matricula: DataTypes.INTEGER,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome_usuario: DataTypes.STRING,
    foto_url: DataTypes.STRING,
    perfil_acesso: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};