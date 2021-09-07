var express = require('express');
var router = express.Router();
const categoryController = require('../controllers/categoryController')
const { isLoggedIn, isAdmin } = require('../lib/auth')


router.get('/', categoryController.allCategories)
router.get('/detalle-de-categoria/:id', categoryController.categoryDetail)
router.get('/crear-categoria', isLoggedIn, isAdmin, categoryController.createCategory)
router.get('/editar-categoria/:id', isLoggedIn, isAdmin, categoryController.editCategory)

router.post('/crear-categoria', categoryController.saveCategory)
router.post('/editar-categoria/:id', categoryController.updateCategory)
router.post('/borrar-categoria/:id', categoryController.deleteCategory)

module.exports = router;