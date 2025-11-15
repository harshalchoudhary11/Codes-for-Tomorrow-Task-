const { Category, Service } = require("../models");
const returnReponse = require("../util/handler/responseSend");

const categoryServices = {

    create: async (req, res) => {
        const { name } = req.body

        if (!name) {
            returnReponse(res, 400, 'Please Provide The Required Values', 'F', null)
        }

        try {
            const category = await Category.create({ name: name });
            returnReponse(res, 200, 'Category Created SuccessFully', 'S', category)
        }
        catch (error) {
            returnReponse(res, 500, 'Error In Category Creation Process', 'F', error.message)
        }
    },

    getAllCategory: async (req, res) => {
        try {
            const category = await Category.findAll();
            returnReponse(res, 200, 'Category Data Fetch SuccessFully', 'S', category)
        }
        catch (error) {
            returnReponse(res, 500, 'Error In Category Fetch Process', 'F', error.message)
        }
    },

    update: async (req, res) => {
        const { name } = req.body
        const { categoryId } = req.params

        if (!name || !categoryId) {
            returnReponse(res, 400, 'Please Provide The Required Values', 'F', null)
        }

        try {
            const category = await Category.update(
                { name: name },
                { where: { id: categoryId } }

            );
            returnReponse(res, 200, 'Category Data Updated SuccessFully', 'S', category)
        }
        catch (error) {
            returnReponse(res, 500, 'Error In Category Update Process', 'F', error.message)
        }
    },
    delete: async (req, res) => {
        const { categoryId } = req.params

        if (!categoryId) {
            returnReponse(res, 400, 'Please Provide The Required Values', 'F', null)
        }

        try {
            const services = await Service.count(
                { where: { categoryId: categoryId } }

            );

            if (services > 0) {
                returnReponse(res, 400, 'Category Not Empty', 'S', null)
            } else {
                const service = await Category.destroy({ where: { id: categoryId } })
                returnReponse(res, 200, 'Category Data Deleted SuccessFully', 'S', service)
            }
        }
        catch (error) {
            returnReponse(res, 500, 'Error In Category Delete Process', 'F', error.message)
        }
    }


}

module.exports = categoryServices;