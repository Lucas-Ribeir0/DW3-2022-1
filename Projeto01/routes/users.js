const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    return res.send({message: `Método GET de usuários funcionando corretamente!`})
});

router.post('/', (req, res) => {
    return res.send({message: `Método POST de usuários funcionando corretamente!`})
});


// Reconhece /users junto ao app.use? 
router.post('/create', (req, res) => {
    return res.send({message: `Usuários criado com sucesso!`})
});

module.exports = router;