var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')
const passport = require('passport')
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth')

router.get('/', userController.allUsers)
router.get('/detalle-de-usuario/:id', userController.userDetail)
router.get('/sing-in', userController.createUser)
router.get('/login', userController.loginUser)
router.get('/logout', userController.logout)

router.get('/logueado', isLoggedIn, (req, res) => {
    res.send(req.user)
})

router.get('/no-logueado', isNotLoggedIn, (req, res) => {
    res.send('NO ESTAS LOGUEADO')
})

router.post('/sing-in', passport.authenticate('local.singup', {
    successRedirect: '/',
    failureRedirect: '/usuarios/sing-in',
    failureFlash: true
}))
router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', {
        successRedirect: '/',
        failureRedirect: '/usuarios/login',
        failureFlash: true
    })(req, res, next);
})

module.exports = router;