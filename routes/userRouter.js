var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.allUsers)
router.get('/detalle-de-usuario/:id', userController.userDetail)
router.get('/crear-usuario/:id', userController.createUser)
router.post('/crear-usuario', userController.saveUser)

module.exports = router;