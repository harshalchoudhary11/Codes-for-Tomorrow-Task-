const { Category, Service, ServicesPrice } = require("../models");
const returnReponse = require("../util/handler/responseSend");

const servicesOperations = {

    create: async (req, res) => {
        const { name, type, priceOptions } = req.body
        const { categoryId } = req.params;

        if (!name || !type || !categoryId || !priceOptions) {
            returnReponse(res, 400, 'Please Provide The Required Values', 'F', null)
        }

        try {
            const service = await Service.create({ categoryId: categoryId, name: name, type: type });

            if (priceOptions) {
                for (let p of priceOptions) {
                    await ServicesPrice.create({
                        serviceId: service.id,
                        duration: p.duration,
                        price: p.price,
                        type: p.type
                    })
                }
            }

            returnReponse(res, 200, 'Serivces Created SuccessFully', 'S', service)
        }
        catch (error) {
            returnReponse(res, 500, 'Error In  Services Creation Process', 'F', error.message)
        }
    },

    getServices: async (req, res) => {
        const { categoryId } = req.params
        try {
            const services = await Service.findAll(
                {
                    where: { categoryId: categoryId },
                    include: []
                });
            returnReponse(res, 200, 'Serivces Data Fetch SuccessFully', 'S', services)
        }
        catch (error) {
            returnReponse(res, 500, 'Error In Services Fetch Process', 'F', error.message)
        }
    },

    updateServices: async (req, res) => {
        const { name, type, priceOptions } = req.body
        const { serviceId } = req.params;

        if (!name || !type || !serviceId) {
            returnReponse(res, 400, 'Please Provide The Required Values', 'F', null)
        }

        try {
            const service = await ServicesPrice.destroy({ where: { serviceId: serviceId } });

            if (priceOptions) {
                for (let p of priceOptions) {
                    await ServicesPrice.create({
                        serviceId: serviceId,
                        duration: p.duration,
                        price: p.price,
                        type: p.type
                    })
                }
            }

            returnReponse(res, 200, 'Serivces Updated SuccessFully', 'S', service)
        }
        catch (error) {
            returnReponse(res, 500, 'Error In Services Update Process', 'F', error.message)
        }
    },
    delete: async (req, res) => {
        const { serviceId } = req.params

        if (!serviceId) {
            returnReponse(res, 400, 'Please Provide The Required Values', 'F', null)
        }

        try {
            const services = await Service.destroy(
                { where: { id: serviceId } }

            );
            returnReponse(res, 200, 'Services Data Deleted SuccessFully', 'S', services)

        }
        catch (error) {
            returnReponse(res, 500, 'Error In Services Delete Process', 'F', error.message)
        }
    }


}

module.exports = servicesOperations;