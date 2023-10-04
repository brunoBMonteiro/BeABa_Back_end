'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Template extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Template.init({
    id: {
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
  });
  return Template;
};