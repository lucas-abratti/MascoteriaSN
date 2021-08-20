const Sequelize = require('sequelize');
const sequelize = require('.');


module.exports = (sequelize, dataTypes) => {
    const alias = 'Product';
    const cols = {
        alias: {
            allowNull: false,
            type: dataTypes.STRING(30)
        },
        price_kg: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        weight: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        price_bagCash: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        price_bagCard: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        category_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        brand_id: {
            allowNull: false,
            type: dataTypes.INTEGER
        },
        img: {
            allowNull: true,
            type: dataTypes.STRING(50)
        },
        info: {
            allowNull: false,
            type: dataTypes.STRING(1000)
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
        tablename: 'products',
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            foreignKey: "category_id",
            as: "category",
        })
    };

    Product.associate = (models) => {
        Product.belongsTo(models.Brand, {
            foreignKey: "brand_id",
            as: "brand",
        })
    };

    return Product
}