'use strict';
const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');
const Usuario = require('./usuario'); // Importando a model Usuario

const Template = sequelize.define('Template', {
  id_template: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Se for uma coluna SERIAL
  },
  nome_template: {
    type: DataTypes.STRING,
  },
  extensao_template: {
    type: DataTypes.STRING,
  },
  data_cadastrado: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.BOOLEAN,
  },
  quantidade_linhas: {
    type: DataTypes.INTEGER,
  },
  campos_template: {
    type: DataTypes.JSON,
  },
  id_usuario_cadastrado: {
    type: DataTypes.INTEGER,
    references: { model: 'Usuario', key: 'id_usuario' } // Referência à chave estrangeira
  },
}, {
  sequelize,
  schema: 'beaba',
  tableName: 'templates',
  modelName: 'Template',
  timestamps: false,
});

// Definindo a associação com a model Usuario
Template.belongsTo(Usuario, {
  foreignKey: 'id_usuario_cadastrado',
  as: 'usuario'
});

module.exports = Template;
