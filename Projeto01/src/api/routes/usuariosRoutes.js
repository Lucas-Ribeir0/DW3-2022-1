const express = require('express')
const router = express.Router()

const usuariosController = require('../controllers/usuariosControllers.js')

router.get('/usuarios', usuariosController.indexAll);

router.post('/usuarios', usuariosController.store);

module.exports = router;

