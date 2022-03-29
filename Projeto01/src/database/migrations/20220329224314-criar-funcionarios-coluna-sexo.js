'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'funcionarios',
          'fun_sexo', {
            type: Sequelize.DataTypes.STRING(1),
          }, {transaction: t})
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn(
          'funcionarios',
          'fun_sexo',
          {transaction: t})
      ])
    })
  }
};
