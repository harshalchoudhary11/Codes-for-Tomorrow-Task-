const servicesOperations = require("../repository/serviceOperation");
const returnReponse = require("../util/handler/responseSend");


const controllerService = {
    servicesCreate: (req, res) => {

        return servicesOperations.create(req, res);

    },
    getAllServices: (req, res) => {

        return servicesOperations.getServices(req, res);

    },
    updateServices: (req, res) => {

        return servicesOperations.updateServices(req, res);

    },

    deleteServices: (req, res) => {
        return servicesOperations.delete(req, res);
    }
}


module.exports = controllerService
