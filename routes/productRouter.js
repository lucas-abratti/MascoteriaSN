var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController')


router.get('/', productController.allProducts)
router.get('/detalle-de-producto/:id', productController.productDetail)
//CRUD
router.get('/crear-producto', productController.createProduct)
router.post('/crear-producto', productController.saveProduct)

router.get('/editar-producto/:id', productController.editProduct)
router.post('/editar-producto/:id', productController.updateProduct)

router.post('/borrar-producto/:id', productController.deleteProduct)

module.exports = router;