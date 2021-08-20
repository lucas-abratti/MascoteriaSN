const Sequelize = require('sequelize');
const sequelize = require('.');


module.exports = (sequelize, dataTypes) => {
    const alias = 'Brand';
    const cols = {
        alias: {
            allowNull: false,
            type: dataTypes.STRING(30)
        }
    };

    const config = {
        tablename: 'brands',
        timestamps: false,
    }

    const Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            foreignKey: "brand_id",
            as: "products",
        })
    }

    return Brand
}