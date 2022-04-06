'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Motocicleta', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      mot_modelo: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      mot_cor: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      mot_categoria: {
        type: Sequelize.STRING(15),
        allowNull: false
      },
      mot_motor: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      mot_ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      mot_valorcusto: {
        type: Sequelize.DECIMAL(12, 2),
        allowNull: false
      },
      mon_codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'Montadora', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }

    }) 
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Motocicleta')
  }
};
