const db = require('../db/models');

const controller = {

    allBrands: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('brands', { categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    brandDetail: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let productsRequest = db.Product.findAll({ where: { brand_id: req.params.id } });
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, productsRequest, brandsRequest])
            .then(([categories, products, brands]) => {
                res.render('brand-detail', { brand_id: req.params.id, categories: categories, products: products, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    createBrand: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('brand-create', { categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    saveBrand: (req, res) => {
        db.Brand.create({
            alias: req.body.alias,
        }).then(brand => {
            res.redirect(`/marcas/detalle-de-marca/${brand.id}`)
        }).catch(error => {
            res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
        })
    },

    editBrand: (req, res) => {
        let brandRequest = db.Brand.findByPk(req.params.id);
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest, brandRequest])
            .then(([categories, brands, brand]) => {
                res.render('brand-edit', { categories: categories, brands: brands, brand: brand })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })

    },

    updateBrand: (req, res) => {
        db.Brand.update({
            alias: req.body.alias,
        }, {
            where: {
                id: req.params.id
            }
        }).then(brand => {
            res.redirect("/marcas")
        }).catch(error => {
            res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
        })
    },

    deleteBrand: (req, res) => {
        db.Brand.destroy({
            where: {
                id: req.params.id
            }
        }).then(brand => {
            res.redirect("/marcas")
        }).catch(error => {
            res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
        })
    }
}

module.exports = controller;