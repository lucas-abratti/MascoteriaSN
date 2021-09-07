var express = require('express');
var router = express.Router();
const brandController = require('../controllers/brandController')
const { isLoggedIn, isAdmin } = require('../lib/auth')


router.get('/', brandController.allBrands)
router.get('/detalle-de-marca/:id', brandController.brandDetail)
router.get('/crear-marca', isLoggedIn, isAdmin, brandController.createBrand)
router.get('/editar-marca/:id', isLoggedIn, isAdmin, brandController.editBrand)

router.post('/crear-marca', brandController.saveBrand)
router.post('/editar-marca/:id', brandController.updateBrand)
router.post('/borrar-marca/:id', brandController.deleteBrand)

module.exports = router;