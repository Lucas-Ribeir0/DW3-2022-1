'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('funcionarios', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fun_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      fun_password: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      fun_email: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
    });
  },


  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('funcionarios');
  }
};
