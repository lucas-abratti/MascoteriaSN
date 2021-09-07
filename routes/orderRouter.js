var express = require('express');
var router = express.Router();
const orderController = require('../controllers/orderController')
const { isLoggedIn, isAdmin, isRightUserOrder } = require('../lib/auth')

router.get('/', isLoggedIn, isAdmin, orderController.orders)
router.get('/mis-pedidos', isLoggedIn , orderController.myOrders)
router.get('/detalle-de-pedido/:id', isLoggedIn, isRightUserOrder, orderController.orderDetail)
router.get('/confirmar-pedido', isLoggedIn, orderController.confirmOrder)
router.get('/editar-pedido/:id', isLoggedIn, isRightUserOrder, orderController.editOrder)

//router.post('/crear-pedido/:id', isLoggedIn, orderController.createOrder)
router.post('/eliminar-pedido/:id', isLoggedIn, isRightUserOrder, orderController.deleteOrder)
router.post('/agregar-a-pedido/:id', isLoggedIn, isRightUserOrder, orderController.addToOrder)
router.post('/eliminar-producto-de-pedido/:id/:productIndex', isLoggedIn, isRightUserOrder, orderController.removeProduct)

module.exports = router;