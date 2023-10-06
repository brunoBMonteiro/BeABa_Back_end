'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {
      // define association here
    }
  }
  Usuario.init({
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    matricula: DataTypes.INTEGER,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome_usuario: DataTypes.STRING,
    foto_url: DataTypes.STRING,
    perfil_acesso: DataTypes.STRING
  }, {
    sequelize,
    schema: 'beaba',
    tableName: 'usuarios',
    modelName: 'usuarios',
  });
  return Usuario;
};
