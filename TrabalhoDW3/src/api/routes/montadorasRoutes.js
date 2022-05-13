const express = require('express')
const router = express.Router();

const montadorasControllers = require('../controllers/montadorasControllers.js')

router.get('/montadoras', montadorasControllers.indexAll)

router.post('/montadoras', montadorasControllers.store)

router.get('/montadoras/:montadora_id/', montadorasControllers.index)

router.put('/montadoras/:montadora_id/', montadorasControllers.update)

router.delete('/montadoras/:montadora_id', montadorasControllers.delete)


module.exports = router
