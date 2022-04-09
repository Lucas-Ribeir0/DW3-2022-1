const express = require('express')
const http = require('http')

require('./src/database/indexDb.js');

// instanciar o express
const app = express();
 
app.use(express.json())
 
const montadorasRoutes = require('./src/api/routes/montadorasRoutes.js')
const motocicletasRoutes = require('./src/api/routes/motocicletasRoutes.js')

app.use(montadorasRoutes)
app.use(motocicletasRoutes)

//configurar a porta e url para execução do aplicativo
app.set('url', 'http://localhost:')
app.set('porta', 3001);

http.createServer(app).listen(app.get('porta'), function(){
    console.log('Servidor rodando na porta: '+app.get('url') +app.get('porta'))
})

module.exports = app;

