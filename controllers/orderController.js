const db = require('../db/models');

const controller = {
    orders: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();
        let ordersRequest = db.Order.findAll();
        let productsRequest = db.Product.findAll();
        let usersRequest = db.User.findAll();

        Promise.all([categoriesRequest, brandsRequest, ordersRequest, productsRequest, usersRequest])
            .then(([categories, brands, orders, products, users]) => {
                res.render('orders', {categories: categories, brands: brands, orders: orders, products: products, users: users })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    orderDetail: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();
        let ordersRequest = db.Order.findOne({where: {id: req.params.id}});
        let productsRequest = db.Product.findAll();
        let usersRequest = db.User.findAll();

        Promise.all([categoriesRequest, brandsRequest, ordersRequest, productsRequest, usersRequest])
            .then(([categories, brands, order, products, users]) => {
                res.render('order-detail', {categories: categories, brands: brands, order: order, products:products, users: users})
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    }
}

module.exports = controller;