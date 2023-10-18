const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  matricula: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
  },
  senha: {
    type: DataTypes.STRING,
  },
  nome_usuario: {
    type: DataTypes.STRING,
  },
  foto_url: {
    type: DataTypes.STRING,
  },
  perfil_acesso: {
    type: DataTypes.STRING,
  },
}, {
  schema: 'beaba',
  tableName: 'usuarios',
  timestamps: true,
});


module.exports = Usuario;