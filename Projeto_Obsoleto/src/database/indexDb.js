const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

try{
    conexao.authenticate();
    console.log('Conexão Estabelecida!')
} catch (error) {
    console.log('Conexão não Estabelecida!')
}

module.exports = conexao;