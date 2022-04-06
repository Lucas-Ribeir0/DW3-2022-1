const express = require('express');
const router = express.Router();

const montadControllers = require('../controllers/montadControllers');

router.get('/montadoras', montadControllers.indexAll);

router.get('/montadoras/:id', montadControllers.index);

router.post('/montadoras', montadControllers.store);

router.put('/montadoras/:id', montadControllers.update);

router.delete('/montadoras/:id', montadControllers.delete);

module.exports = router;