const express = require('express');
const router = express.Router();
const { list, create, remove, read, update, gatewayById } = require('../controllers/gateway');

router.get('/gateway', list);
router.get('/gateway/:serialNumber', read);
router.post('/gateway', create);
router.put('/gateway/:serialNumber', update);
router.delete('/gateway/:serialNumber', remove);

router.param('serialNumber', gatewayById);


module.exports = router;