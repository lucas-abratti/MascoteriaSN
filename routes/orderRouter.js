var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')
const { isLoggedIn } = require('../lib/auth')

router.get('/', orderController.orders)
router.get('/detalle-de-pedido/:id', orderController.orderDetail)

router.post('/crear-pedido/:id', isLoggedIn, orderController.createOrder)
router.post('/agregar-a-pedido/:id', isLoggedIn, orderController.addToOrder)

module.exports = router;