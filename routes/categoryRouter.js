var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController')


router.get('/', categoryController.allCategories)
router.get('/detalle-de-categoria/:id', categoryController.categoryDetail)
router.get('/crear-categoria', categoryController.createCategory)
router.post('/crear-categoria', categoryController.saveCategory)
router.get('/editar-categoria/:id', categoryController.editCategory)
router.post('/editar-categoria/:id', categoryController.updateCategory)
router.post('/borrar-categoria/:id', categoryController.deleteCategory)

module.exports = router;