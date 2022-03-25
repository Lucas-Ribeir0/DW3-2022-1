'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', 
          key: 'id', // Criando uma chave estrangeira
        },
        onUpdate: 'CASCADE', // Faz o "Update" ou "Delete" em modo cascata, deletando ou atualizando todas as "childrens" da chave primária.
        onDelete: 'CASCADE',
      },
      
      end_endereco: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      end_cep: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      end_numero: {
        type: Sequelize.STRING(10),
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
    return queryInterface.dropTable('enderecos');
  }
};