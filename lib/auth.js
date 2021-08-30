module.exports = {
    isLoggedIn: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next()
        } else {
            req.flash('msg', 'No está logueado, fue redireccionado a la página de login')
            return res.redirect('/usuarios/login')
        }
    },
    isNotLoggedIn: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next()
        } else {
            req.flash('msg', 'Fue redirreccionado a la página principal, por favor cierre su sesion de usuario para acceder a esa página')
            return res.redirect('/')
        }
    }
}