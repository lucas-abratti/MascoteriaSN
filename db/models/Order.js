const Sequelize = require('sequelize');
const sequelize = require('.');


module.exports = (sequelize, dataTypes) => {
    const alias = 'Order';
    const cols = {
        user_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        products: {
            allowNull: false,
            type: dataTypes.STRING(200)
        },
        listing_status: {
            allowNull: false,
            type: dataTypes.STRING(30)
        },
        createdAt: {
            allowNull: true,
            type: dataTypes.DATE
        },
        updatedAt: {
            allowNull: true,
            type: dataTypes.DATE
        },
        deletedAt: {
            allowNull: true,
            type: dataTypes.DATE
        }
    };

    const config = {
        tablename: 'orders',
        paranoid: true
    }

    const Order = sequelize.define(alias, cols, config)

    Order.associate = (models) => {
        Order.hasOne(models.User, {
            foreignKey: "id",
            as: "user",
        })
    };

    return Order
}