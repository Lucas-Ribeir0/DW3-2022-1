const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

//Instanciar o EXPRESS
const app = express();

const indexRoute = require('./src/routes/index.js')
const usersRoute = require('./src/routes/users.js')

app.use('/', indexRoute)
app.use('/users', usersRoute)


// Configurar a porta e URL para execução do aplicativo.

app.set('url', 'http://localhost:')
app.set('porta', 3000);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: ' + app.get('url') + app.get('porta'));
})

/* app.listen(app.get('porta'), function() {
    console.log('Servidor rodando na porta: '+app.get('porta'))
}); */

module.exports = app; 


