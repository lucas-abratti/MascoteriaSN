const db = require('../db/models');

module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        } else {
            req.flash('msg', 'No está logueado, fue redireccionado a la página de login');
            return res.redirect('/usuarios/login');
        }
    },
    isNotLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next();
        } else {
            req.flash('msg', 'Fue redirreccionado a la página principal, por favor cierre su sesion de usuario para acceder a esa página');
            return res.redirect('/');
        }
    },
    isAdmin: (req, res, next) => {
        if (req.user.clearance == 'administrador') {
            return next();
        } else {
            req.flash('msg', 'Intentó ingresar a una pagina para la cual no tiene permisos, fue redireccionado a la página principal');
            return res.redirect('/');
        }
    },
    isRightUserProfile: (req, res, next) => {
        if (req.user.clearance != 'administrador') {
            if (req.params.id == req.user.id) {
                return next()
            } else {
                return res.redirect(`/usuarios/detalle-de-usuario/${req.user.id}`)
            }
        } else {
            return next()
        }
    },
    isRightUserOrder: async (req, res, next) => {
        if (req.user.clearance != 'administrador') {
            if (req.params.id == req.user.id) {
                return next()
            } else {
                const order = await db.Order.findOne({where: {id: req.params.id}})
                if(order.user_id == req.user.id) {
                    return next()
                }
                req.flash('msg', 'Intentó ver el pedido de otro usuario, fue redireccionado a sus pedidos');
                return res.redirect(`/pedidos/mis-pedidos`)
            }
        } else {
            return next()
        }
    },
}