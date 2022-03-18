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
      emp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'empresas', key: 'id'}, // Criando uma chave estrangeira
        onUpdate: 'CASCADE', // Faz o "Update" ou "Delete" em modo cascata, deletando ou atualizando todas as "childrens" da chave primária.
        onDelete: 'CASCADE',
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
      created_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_At: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('funcionarios');
  }
};