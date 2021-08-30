const db = require('../db/models');
const passport = require('passport')

const controller = {

    allUsers: (req, res) => {
        let usersRequest = db.User.findAll();
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([usersRequest, categoriesRequest, brandsRequest])
            .then(([users, categories, brands]) => {
                res.render('users', { users: users, categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    userDetail: (req, res) => {
        let userRequest = db.User.findByPk(req.params.id);
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([userRequest, categoriesRequest, brandsRequest])
            .then(([user, categories, brands]) => {
                res.render('users-detail', { user: user, categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    createUser: (req, res) => {

        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('user-register', {categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    loginUser: (req, res) => {
        
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('user-login', {categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    logout: (req, res) => {
        req.logOut();
        res.redirect('login')
    }

}

module.exports = controller;