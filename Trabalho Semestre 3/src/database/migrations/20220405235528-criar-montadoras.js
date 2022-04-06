'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Montadora', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      mon_nome: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      mon_fantasia: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      mon_ceo: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      mon_pais: {
        type: Sequelize.STRING(20)
      },
      mon_fundacao: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Montadora')
  }
};
