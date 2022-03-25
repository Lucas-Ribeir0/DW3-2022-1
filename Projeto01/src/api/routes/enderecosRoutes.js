const express = require('express')
const router = express.Router()

const enderecosControllers = require('../controllers/enderecosController.js')

router.get('/enderecos', enderecosControllers.indexAll)

router.get('/usuario/:usuario_id/enderecos', enderecosControllers.index)

router.post('/usuario/:usuario_id/enderecos', enderecosControllers.store)

module.exports = router