var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

/* GET home page. */
router.get('/index', mainController.index);
router.get('/', mainController.db)
router.get('/panel-de-control', mainController.controlPanel)
router.get('/editar-productos', mainController.editProducts)
router.get('/editar-categorias', mainController.editCategories)
router.get('/editar-marcas', mainController.editBrands)

module.exports = router;
