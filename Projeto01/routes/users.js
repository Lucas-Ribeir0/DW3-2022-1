const express = require('express');
const router = express.Router()

router.get('/users', (req, res) => {
    return res.send({message: `Método GET de usuários funcionando corretamente!`})
});

router.post('/users', (req, res) => {
    return res.send({message: `Método POST de usuários funcionando corretamente!`})
});

router.post('/users/create', (req, res) => {
    return res.send({message: `Método POST de usuários funcionando corretamente!`})
});

module.exports = router;