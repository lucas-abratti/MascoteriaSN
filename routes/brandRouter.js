var express = require('express');
var router = express.Router();
const brandController = require('../controllers/brandController')


router.get('/', brandController.allBrands)
router.get('/detalle-de-marca/:id', brandController.brandDetail)
router.get('/crear-marca', brandController.createBrand)
router.post('/crear-marca', brandController.saveBrand)
router.get('/editar-marca/:id', brandController.editBrand)
router.post('/editar-marca/:id', brandController.updateBrand)
router.post('/borrar-marca/:id', brandController.deleteBrand)

module.exports = router;