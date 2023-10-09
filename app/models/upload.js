'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Upload extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Upload.init({
    id_upload: DataTypes.INTEGER,
    nome_arquivo: DataTypes.STRING,
    data_envio: DataTypes.DATE,
    quantidade_linhas: DataTypes.INTEGER,
    quantidade_acessos: DataTypes.INTEGER,
    id_template_associado: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Upload',
  });
  return Upload;
};