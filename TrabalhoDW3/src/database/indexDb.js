const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

const montadoras = require('../api/models/montadorasModels.js')
const motocicletas = require('../api/models/motocicletasModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida!')
}

montadoras.init(conexao)
motocicletas.init(conexao)

montadoras.associate(conexao.models)
motocicletas.associate(conexao.models)

module.exports = conexao;

