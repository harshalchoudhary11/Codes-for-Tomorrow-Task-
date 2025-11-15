const { DataTypes } = require('sequelize');
const sequelize = require("../config/dataBase")


const Category = sequelize.define("Category", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = Category;