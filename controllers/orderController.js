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
                res.render('orders', { categories: categories, brands: brands, orders: orders, products: products, users: users })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    orderDetail: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();
        let ordersRequest = db.Order.findOne({ where: { id: req.params.id } });
        let productsRequest = db.Product.findAll();
        let usersRequest = db.User.findAll();

        Promise.all([categoriesRequest, brandsRequest, ordersRequest, productsRequest, usersRequest])
            .then(([categories, brands, order, products, users]) => {
                res.render('order-detail', { categories: categories, brands: brands, order: order, products: products, users: users })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    createOrder: async (req, res) => {
        if (req.body.order_kg) {
            var addedProduct = await db.Order.create({
                user_id: req.user.id,
                products: `${req.body.order_kg}kg ${req.params.id}`
            });
        } else if (req.body.order_bagCash) {
            var addedProduct = await db.Order.create({
                user_id: req.user.id,
                products: `${req.body.order_bagCash}bolsa-efectivo ${req.params.id}`
            });
        } else if (req.body.order_bagCard) {
            var addedProduct = await db.Order.create({
                user_id: req.user.id,
                products: `${req.body.order_bagCard}bolsa-tarjeta ${req.params.id}`
            });
        };

        db.User.update({
            activeOrder: true
        }, {
            where: {
                id: req.user.id
            }
        });
        res.redirect(`/pedidos/detalle-de-pedido/${addedProduct.id}`);
    },

    addToOrder: async (req, res) => {
        const orderToEdit = await db.Order.findOne({ where: { user_id: req.user.id } })
        if (req.body.order_kg) {
            db.Order.update({
                user_id: req.user.id,
                products: `${orderToEdit.products},${req.body.order_kg}kg ${req.params.id}`
            }, {
                where: {
                    user_id: req.user.id
                }
            });
        } else if (req.body.order_bagCash) {
            db.Order.update({
                user_id: req.user.id,
                products: `${orderToEdit.products},${req.body.order_bagCash}bolsa-efectivo ${req.params.id}`
            }, {
                where: {
                    user_id: req.user.id
                }
            });
        } else if (req.body.order_bagCard) {
            db.Order.update({
                user_id: req.user.id,
                products: `${orderToEdit.products},${req.body.order_bagCard}bolsa-tarjeta ${req.params.id}`
            }, {
                where: {
                    user_id: req.user.id
                }
            });
        };
        res.redirect(`/pedidos/detalle-de-pedido/${orderToEdit.id}`);
    }
}

module.exports = controller;