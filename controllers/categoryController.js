const db = require('../db/models');

const controller = {

    allCategories: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('categories', {categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    categoryDetail: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();
        let productsRequest = db.Product.findAll({ where: { category_id: req.params.id } });

        Promise.all([categoriesRequest, brandsRequest, productsRequest])
            .then(([categories, brands, products]) => {
                res.render('category-detail', { category_id: req.params.id, categories: categories, brands: brands, products: products })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    createCategory: (req, res) => {
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoriesRequest, brandsRequest])
            .then(([categories, brands]) => {
                res.render('category-create', {categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    saveCategory: (req, res) => {
        db.Category.create({
            alias: req.body.alias,
        }).then(category => {
            res.redirect(`/categorias/detalle-de-categoria/${category.id}`)
        }).catch(error => {
            res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
        })
    },

    editCategory: (req, res) => {
        
        let categoryRequest = db.Category.findByPk(req.params.id);
        let categoriesRequest = db.Category.findAll();
        let brandsRequest = db.Brand.findAll();

        Promise.all([categoryRequest, categoriesRequest, brandsRequest])
            .then(([category, categories, brands]) => {
                res.render('category-edit', { category: category, categories: categories, brands: brands })
            }).catch(error => {
                res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
            })
    },

    updateCategory: (req, res) => {
        db.Category.update({
            alias: req.body.alias,
        }, {
            where: {
                id: req.params.id
            }
        }).then(category => {
            res.redirect("/categorias")
        }).catch(error => {
            res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
        })
    },

    deleteCategory: (req, res) => {
        db.Category.destroy({
            where: {
                id: req.params.id
            }
        }).then(brand => {
            res.redirect("/categorias")
        }).catch(error => {
            res.render('error', { error: error, message: 'UPS! Ha ocurrido un error!' })
        })
    }
}

module.exports = controller;