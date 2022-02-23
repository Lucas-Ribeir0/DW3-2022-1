const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    return res.send({message: `Método GET funcionando corretamente!`})
});

router.post('/', (req, res) => {
    return res.send({message: `Método POST funcionando corretamente!`})
});

module.exports = router;