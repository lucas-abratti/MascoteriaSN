var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')

router.get('/', orderController.orders)
router.get('/detalle-de-pedido/:id', orderController.orderDetail)

module.exports = router;