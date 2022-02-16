const express = require('express')

//Instanciar o EXPRESS
const app = express();

const indexRoute = require('./routes/index.js')

app.use('/', indexRoute)
// Configurar a porta para execução do aplicativo.
app.set('porta', 3000);

app.listen(app.get('porta'), function() {
    console.log('Servidor rodando na porta: '+app.get('porta'))
});

module.exports = app; 
