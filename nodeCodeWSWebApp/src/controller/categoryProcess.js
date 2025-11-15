const categoryServices = require("../repository/categoryOperation");
const returnReponse = require("../util/handler/responseSend");


const controllerCategory = {
    categoryCreate: (req, res) => {

        return categoryServices.create(req, res);

    },
    getAllCategory: (req, res) => {

        return categoryServices.getAllCategory(req, res);

    },
    update: (req, res) => {

        return categoryServices.update(req, res);

    },

    delete: (req, res) => {

        return categoryServices.delete(req, res);

    }
}


module.exports = controllerCategory
