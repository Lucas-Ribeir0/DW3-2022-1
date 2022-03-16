const express = require('express');
const router = express.Router();

const empresasController = require('../controllers/empresasControllers.js')

router.get('/empresas', empresasController.indexAll)

router.post('/empresas', empresasController.store)

module.exports = router