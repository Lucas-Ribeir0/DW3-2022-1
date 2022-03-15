'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('empresas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      emp_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      emp_contato: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      emp_email: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('empresas');
  }
};
