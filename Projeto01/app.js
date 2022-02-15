const express = require('express')

// Instanciar o EXPRESS
const app = express();

app.get('/', (req, res) => {
    res.send({message: 'Rota Raiz Encontrada!'})
});

// Configurar a porta para execução do aplicativo.
app.set('porta', 3000);

app.listen(app.get('porta'), function() {
    console.log('Servidor rodando na porta: '+app.get('porta'))
});

module.exports = app; 
