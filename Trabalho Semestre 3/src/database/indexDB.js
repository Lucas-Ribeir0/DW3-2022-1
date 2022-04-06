const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const conexao = new Sequelize(dbConfig);

const montadoras = require('../api/models/montadModels.js');
const motocicletas = require('../api/models/motocicModels.js')

try {
    conexao.authenticate();
    console.log('Conexão Estabelecida!');
}   catch(error) {
    console.log('Conexão não Estabelecida!', error);
}

montadoras.init(conexao);
motocicletas.init(conexao);

module.exports = conexao;