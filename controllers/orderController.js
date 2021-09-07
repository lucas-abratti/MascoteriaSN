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

    addToOrder: async (req, res) => {
        const user = await db.User.findOne({ where: { id: req.user.id } })
        const orderToEdit = await db.Order.findOne({ where: { user_id: req.user.id, listing_status: 'a confirmar' } })

        if (user.activeOrder) {
            if (req.body.order_kg) {
                await db.Order.update({
                    user_id: req.user.id,
                    products: `${orderToEdit.products},${req.body.order_kg}kg ${req.params.id}`
                }, {
                    where: {
                        user_id: req.user.id, 
                        listing_status: 'a confirmar'
                    }
                });
            } else if (req.body.order_bagCash) {
                await db.Order.update({
                    user_id: req.user.id,
                    products: `${orderToEdit.products},${req.body.order_bagCash}bolsa-efectivo ${req.params.id}`
                }, {
                    where: {
                        user_id: req.user.id, 
                        listing_status: 'a confirmar'
                    }
                });
            } else if (req.body.order_bagCard) {
                await db.Order.update({
                    user_id: req.user.id,
                    products: `${orderToEdit.products},${req.body.order_bagCard}bolsa-tarjeta ${req.params.id}`
                }, {
                    where: {
                        user_id: req.user.id, 
                        listing_status: 'a confirmar'
                    }
                });
            };
        } else {
            if (req.body.order_kg) {
                var addedProduct = await db.Order.create({
                    user_id: req.user.id,
                    products: `${req.body.order_kg}kg ${req.params.id}`,
                    listing_status: 'a confirmar'
                });
            } else if (req.body.order_bagCash) {
                var addedProduct = await db.Order.create({
                    user_id: req.user.id,
                    products: `${req.body.order_bagCash}bolsa-efectivo ${req.params.id}`,
                    listing_status: 'a confirmar'
                });
            } else if (req.body.order_bagCard) {
                var addedProduct = await db.Order.create({
                    user_id: req.user.id,
                    products: `${req.body.order_bagCard}bolsa-tarjeta ${req.params.id}`,
                    listing_status: 'a confirmar'
                });
            };

            await db.User.update({
                activeOrder: true
            }, {
                where: {
                    id: req.user.id
                }
            })
            res.redirect(`/pedidos/mis-pedidos`);
        }

        res.redirect(`/pedidos/mis-pedidos`);
    },

    confirmOrder: async (req, res) => {
        const orderToConfirm = await db.Order.update(
            {
                listing_status: 'confirmado'
            },
            {
                where: {
                    user_id: req.user.id
                }
            });
        await db.User.update(
            {
                activeOrder: 0
            },
            {
                where: {
                    id: req.user.id
                }
            }
        )
        res.redirect(`/pedidos/mis-pedidos`);
    },

    myOrders: async (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();
        let activeOrder = db.Order.findOne({ where: { user_id: req.user.id, listing_status: 'a confirmar' } })
        let ordersRequest = db.Order.findAll({ where: { user_id: req.user.id, listing_status: 'confirmado' }, paranoid: false });
        let productsRequest = db.Product.findAll();
        let usersRequest = db.User.findAll();
        Promise.all([categoriesRequest, brandsRequest, ordersRequest, productsRequest, usersRequest, activeOrder])
            .then(([categories, brands, orders, products, users, activeOrder]) => {
                res.render('orders-my-orders', { categories: categories, brands: brands, orders: orders, products: products, users: users, activeOrder: activeOrder })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    editOrder: async (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();
        let productsRequest = db.Product.findAll();
        let usersRequest = db.User.findAll();
        let orderRequest = db.Order.findByPk(req.params.id)
        Promise.all([categoriesRequest, brandsRequest, productsRequest, usersRequest, orderRequest])
            .then(([categories, brands, products, users, order]) => {
                res.render('order-edit', { categories: categories, brands: brands, products: products, users: users, order: order })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    removeProduct: async (req, res) => {
        const order = await db.Order.findByPk(req.params.id)
        const productsString = order.products.split(',')
        let productsArray = []
        productsString.forEach(productAndUnit => {
            productsArray.push(productAndUnit.split(' '))

        });
        productsArray.splice(req.params.productIndex, 1)
        productsArray.forEach((product, i) => {
            productsArray[i] = `${product[0]} ${product[1]}`
        })

        await db.Order.update(
            {
                products: `${productsArray}`
            },
            {
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/pedidos/mis-pedidos')
    },
    deleteOrder: async (req, res) => {
        const deletedOrder = await db.Order.destroy({ where: { id: req.params.id } })
        await db.User.update(
            {
                activeOrder: 0
            },
            {
                where: {
                    id: req.user.id
                }
            }
        )
        res.redirect('/pedidos/mis-pedidos')
    }
}

module.exports = controller;