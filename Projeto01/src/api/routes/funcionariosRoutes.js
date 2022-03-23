const express = require('express');
const router = express.Router();

const funcionariosControllers = require('../controllers/funcionariosControllers.js')

router.get('/funcionarios', funcionariosControllers.indexAll)

router.get('/empresa/:emp_id/funcionarios', funcionariosControllers.index)

router.post('/empresa/:emp_id/funcionarios', funcionariosControllers.store)

module.exports = router