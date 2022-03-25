const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

// instanciar o express
const app = express();
app.use(express.json())

const indexRoutes = require('./src/api/routes/indexRoutes.js')
const usuariosRoutes = require('./src/api/routes/usuariosRoutes.js')
const empresasRoutes = require('./src/api/routes/empresasRoutes.js')
const funcionariosRoutes = require('./src/api/routes/funcionariosRoutes.js')
const enderecosRoutes = require('./src/api/routes/enderecosRoutes.js')

app.use(indexRoutes)
app.use(usuariosRoutes)
app.use(empresasRoutes)
app.use(funcionariosRoutes)
app.use(enderecosRoutes)

//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3001);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;

