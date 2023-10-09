'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    static associate(models) {
      // define association here
    }
  }
  Template.init({
    id_template: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
      type: DataTypes.INTEGER,
    },
    nome_template: DataTypes.STRING,
    extensao_template: DataTypes.STRING,
    data_cadastrado: DataTypes.DATE,
    status: DataTypes.BOOLEAN,
    quantidade_linhas: DataTypes.INTEGER,
    campos_template: DataTypes.JSON,
    id_usuario_cadastrado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Template',
    schema: 'beaba',
    tableName: 'templates', 
    timestamps: false, 
  });
  return Template;
};
