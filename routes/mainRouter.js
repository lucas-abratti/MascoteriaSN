var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')
const { isLoggedIn, isAdmin } = require('../lib/auth')

/* GET home page. */
router.get('/index', mainController.index);
router.get('/', mainController.db)
router.get('/panel-de-control', isLoggedIn, isAdmin, mainController.controlPanel)
router.get('/editar-productos', isLoggedIn, isAdmin, mainController.editProducts)
router.get('/editar-categorias', isLoggedIn, isAdmin, mainController.editCategories)
router.get('/editar-marcas', isLoggedIn, isAdmin, mainController.editBrands)

module.exports = router;
