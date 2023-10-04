'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER
      },
      matricula: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      },
      nome_usuario: {
        type: Sequelize.STRING
      },
      foto_url: {
        type: Sequelize.STRING
      },
      perfil_acesso: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};