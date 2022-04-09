const express = require('express')
const router = express.Router();

const motocicletasControllers = require('../controllers/motocicletasControllers.js')

router.get('/motocicletas', motocicletasControllers.indexAll)

router.post('/montadoras/:montadora_id/motocicletas', motocicletasControllers.store)

router.get('/montadoras/:montadora_id/motocicletas', motocicletasControllers.index)

router.put('/montadoras/motocicletas/update', motocicletasControllers.update)

router.delete('/motocicletas/:motocicleta_id', motocicletasControllers.delete)

module.exports = router

