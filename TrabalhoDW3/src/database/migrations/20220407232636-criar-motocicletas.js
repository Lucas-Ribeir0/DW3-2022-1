'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('motocicletas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      montadora_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'montadoras', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      mot_nome: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      mot_motor: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      mot_valor: {
        type: Sequelize.INTEGER,
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
  
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('motocicletas');
  }
};
