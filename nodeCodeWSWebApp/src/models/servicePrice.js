const { DataTypes } = require('sequelize');
const sequelize = require("../config/dataBase")


const ServicesPrice = sequelize.define("ServicesPrice", {
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    type: {
        type: DataTypes.ENUM("Hourly", "Weekly", "Monthly"),
        allowNull: false
    }
})

module.exports = ServicesPrice;