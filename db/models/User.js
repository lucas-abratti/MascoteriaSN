const Sequelize = require('sequelize');
const sequelize = require('.');


module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        alias: {
            allowNull: false,
            type: dataTypes.STRING(30)
        },
        email: {
            allowNull: false,
            type: dataTypes.STRING(200)
        },
        phoneNumber: {
            allowNull: false,
            type: dataTypes.STRING(15)
        },
        encryptedPassword: {
            allowNull: false,
            type: dataTypes.STRING(200)
        },
        activeOrder: {
            type: dataTypes.BOOLEAN,
            default: 0
        },
        clearance: {
            type: dataTypes.STRING(30),
            default: 'cliente'
        }
    };
    

    const config = {
        tablename: 'users',
        paranoid: true
    }

    const User = sequelize.define(alias, cols, config)

    User.associate = (models) => {
        User.hasMany(models.Order, {
            foreignKey: "id",
            as: "purchase",
        })
    };

    return User
}