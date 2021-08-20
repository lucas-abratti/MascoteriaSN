const db = require('../db/models');

const controller = {
    index: (req, res) => {
        res.render('index', { title: 'Express' });
    },

    db: (req, res) => {
        let usersRequest = db.User.findAll();
        let categoriesRequest = db.Category.findAll();
        let productsRequest = db.Product.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([usersRequest, categoriesRequest, productsRequest, brandsRequest])
            .then(([users, categories, products, brands]) => {
                res.render('db', { users: users, categories: categories, products: products, brands: brands })
            }).catch(error => {
                res.render('error', {error: error, message: 'UPS! Ha ocurrido un error!'})
            })
    },

    controlPanel: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
        .then(([categories, brands]) => {
            res.render('control-panel', {categories: categories, brands: brands})
        })
        
    },

    editProducts: (req, res) => {
        let productsRequest = db.Product.findAll();
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([productsRequest, categoriesRequest, brandsRequest])
        .then(([products, categories, brands]) => {
            res.render('edit-products', {products: products, categories: categories, brands: brands})
        })
        
    },

    editCategories: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('edit-categories', { categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
        
    },

    editBrands: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('edit-brands', {  categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
        
        
    }
}

module.exports = controller;