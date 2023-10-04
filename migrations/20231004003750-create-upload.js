'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Uploads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_upload: {
        type: Sequelize.INTEGER
      },
      nome_arquivo: {
        type: Sequelize.STRING
      },
      data_envio: {
        type: Sequelize.DATE
      },
      quantidade_linhas: {
        type: Sequelize.INTEGER
      },
      quantidade_acessos: {
        type: Sequelize.INTEGER
      },
      id_template_associado: {
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
    await queryInterface.dropTable('Uploads');
  }
};