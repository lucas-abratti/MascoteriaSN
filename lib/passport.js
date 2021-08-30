const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../db/models')
const helpers = require('../lib/helpers')

passport.use('local.login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, alias, password, done) => {
    const user = await db.User.findOne({ where: { email: alias } })
    if (user) {
        const matched = await helpers.matchPassword(password, user.encryptedPassword)
        if (matched) {
            done(null, user, req.flash('msg', `Bienvenido ${user.alias}`))
        } else {
            req.flash('login', 'Contraseña incorrecta')
            done(null, false, req.flash('Contraseña incorrecta'))
        }
    } else {
        req.flash('login', 'No hay usuario asociado a ese email')
        return done(null, false);
    };
}));

passport.use('local.singup', new LocalStrategy({
    usernameField: 'alias',
    emailFiled: 'email',
    phoneNumberField: 'phoneNumber',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, alias, password, done) => {
    try {
        encryptedPassword = await helpers.encryptPassword(password)
        const newUser = {
            alias,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            encryptedPassword,
        }
        const findUser = await db.User.findOne({ where: { email: req.body.email } })
        if (findUser) {
            return done(null, false, req.flash('singin', 'Este mail ya tiene un usario asociado'))
        } else {
            const result = await db.User.create(newUser)
            newUser.id = result.id;
            return done(null, newUser, req.flash('msg', `Bienvenido/a ${newUser.alias}`))
        }
    } catch {
        return (true)
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser(async (id, done) => {
    const user = await db.User.findByPk(id, { attributes: { exclude: ['phoneNumber', 'encryptedPassword'] } })
    done(null, user)
})