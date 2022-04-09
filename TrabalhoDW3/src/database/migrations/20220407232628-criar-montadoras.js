'use strict';

const { sequelize } = require("../../api/models/montadorasModels");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('montadoras', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      mon_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      mon_ceo: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      mon_contato: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      mon_fundacao: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('montadoras');
  }
};