var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')
const { isLoggedIn, isAdmin } = require('../lib/auth')


router.get('/', productController.allProducts)
router.get('/detalle-de-producto/:id', productController.productDetail)
//CRUD
router.get('/crear-producto', isLoggedIn, isAdmin, productController.createProduct)
router.post('/crear-producto', productController.saveProduct)

router.get('/editar-producto/:id', isLoggedIn, isAdmin, productController.editProduct)
router.post('/editar-producto/:id', productController.updateProduct)

router.post('/borrar-producto/:id', productController.deleteProduct)

module.exports = router;