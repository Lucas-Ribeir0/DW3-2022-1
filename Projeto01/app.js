const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

// instanciar o express
const app = express();

const indexRoute = require('./src/routes/index.js')
const usersRoute = require('./src/routes/users.js')

app.use('/', indexRoute)
app.use('/users', usersRoute)

//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3001);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;

