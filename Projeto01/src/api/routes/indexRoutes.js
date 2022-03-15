const express = require('express')
const router = express.Router()

const indexControllers = require('../controllers/indexControllers.js')

router.get('/', (req, res) => {
    return res.send({Message: `Método GET funcionando corretamente!!!` })
});

module.exports = router;

