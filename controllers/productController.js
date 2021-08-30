const db = require('../db/models');

const controller = {

    allProducts: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let productsRequest = db.Product.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, productsRequest, brandsRequest])
            .then(([categories, products, brands]) => {
                res.render('products', { categories: categories, products: products, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    productDetail: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let productRequest = db.Product.findByPk(req.params.id);
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, productRequest, brandsRequest])
            .then(([categories, product, brands]) => {
                res.render('product-detail', { categories: categories, product: product, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    createProduct: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('product-create', { categories: categories, brands: brands })
            }).catch(error => {
                req.flash('msg', 'Ha ocurrido un error')
                res.redirect("/productos")
            })
    },

    editProduct: (req, res) => {
            let productRequest = db.Product.findByPk(req.params.id)
            let categoriesRequest = db.Category.findAll();
            let brandsRequest = db.Brand.findAll();
    
            Promise.all([productRequest, categoriesRequest, brandsRequest])
                .then(([product, categories, brands]) => {
                    res.render('product-edit', { product: product, categories: categories, brands: brands })
                }).catch(error => {
                    req.flash('msg', `Ha ocurido un error ${error}`)
                    res.redirect("/productos")
                })
    },

    saveProduct: (req, res) => {
        db.Product.create({
            alias: req.body.alias,
            price_kg: req.body.price_kg,
            price_bagCash: req.body.price_bagCash,
            price_bagCard: req.body.price_bagCard,
            category_id: req.body.category_id,
            brand_id: req.body.brand_id,
        }).then(product => {
            res.redirect(`/productos/detalle-de-producto/${product.id}`)
        }).catch(error => {
            req.flash('msg', `Ha ocurido un error y el producto no ha sido creado ${error}`)
            res.redirect("/productos")
        })
    },

    updateProduct: (req, res) => {
        db.Product.update({
            alias: req.body.alias,
            price_kg: req.body.price_kg,
            weight: req.body.weight,
            price_bagCash: req.body.price_bagCash,
            price_bagCard: req.body.price_bagCard,
            category_id: req.body.category_id,
            brand_id: req.body.brand_id,
            img: req.body.img,
            info: req.body.info,
        }, {
            where: {
                id: req.params.id
            }
        }).then( product => {
            req.flash('msg', `Producto actualizado con éxito`)
            res.redirect(`/productos`)
        }).catch(error => {
            req.flash('msg', 'Ha ocurrido un error y el producto no ha sido actualizado')
            res.redirect("/productos")
        })
    },

    deleteProduct: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(
            req.flash('msg', 'El producto ha sido eliminado satisfactoriamente'),
            res.redirect('/productos')
        )
    }

}

module.exports = controller;