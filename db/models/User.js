const Sequelize = require('sequelize');
const sequelize = require('.');


module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        alias: {
            allowNull: false,
            type: dataTypes.STRING(30)
        },
        adress: {
            allowNull: false,
            type: dataTypes.STRING(200)
        }
    };
    

    const config = {
        tablename: 'users',
        timestamps: false
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