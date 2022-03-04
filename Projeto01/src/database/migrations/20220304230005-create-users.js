'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usr_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      usr_email: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      usr_password: {
        type: Sequelize.STRING(20),
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
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};