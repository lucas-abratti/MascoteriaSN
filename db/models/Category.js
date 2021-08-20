const Sequelize = require('sequelize');
const sequelize = require('.');


module.exports = (sequelize, dataTypes) => {
    const alias = 'Category';
    const cols = {
        alias: {
            allowNull: false,
            type: dataTypes.STRING(30)
        }
    };

    const config = {
        tablename: 'categories',
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: "category_id",
            as: "products",
        })
    }

    return Category
}