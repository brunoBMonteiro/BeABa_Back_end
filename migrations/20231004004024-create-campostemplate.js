'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Campostemplates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_campo: {
        type: Sequelize.INTEGER
      },
      nome_campo: {
        type: Sequelize.STRING
      },
      tipo_dado_esperado: {
        type: Sequelize.STRING
      },
      nulo: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Campostemplates');
  }
};