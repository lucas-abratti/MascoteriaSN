var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const passport = require('passport')
const { isLoggedIn, isAdmin, isRightUserProfile } = require('../lib/auth')

router.get('/', isLoggedIn, isAdmin, userController.allUsers)
router.get('/detalle-de-usuario/:id', isLoggedIn, isRightUserProfile, userController.userDetail)
router.get('/sing-in', userController.createUser)
router.get('/login', userController.loginUser)
router.get('/logout', userController.logout)

router.post('/sing-in', passport.authenticate('local.singup', {
    successRedirect: '/',
    failureRedirect: '/usuarios/sing-in',
    failureFlash: true
}))
router.post('/login', passport.authenticate('local.login', {
    successRedirect: '/',
    failureRedirect: '/usuarios/login',
    failureFlash: true
}))

module.exports = router;