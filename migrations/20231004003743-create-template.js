'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Templates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_template: {
        type: Sequelize.INTEGER
      },
      nome_template: {
        type: Sequelize.STRING
      },
      extensao_template: {
        type: Sequelize.STRING
      },
      data_cadastrado: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      quantidade_linhas: {
        type: Sequelize.INTEGER
      },
      campos_template: {
        type: Sequelize.JSON
      },
      id_usuario_cadastrado: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Templates');
  }
};