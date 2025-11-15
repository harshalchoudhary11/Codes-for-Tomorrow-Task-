const sequelize = require('../config/dataBase')
const Category = require('./category')
const Service = require('./service');
const ServicesPrice = require('./servicePrice');
const User = require('./user');

Category.hasMany(Service, { foreignKey: "categoryId", onDelete: "CASCADE" });
Service.belongsTo(Category, { foreignKey: "categoryId" });
Service.hasMany(ServicesPrice, { foreignKey: "serviceId", onDelete: "CASCADE" })
ServicesPrice.belongsTo(Service, { foreignKey: "serviceId" })


module.exports = { sequelize, User, Category, Service, ServicesPrice }