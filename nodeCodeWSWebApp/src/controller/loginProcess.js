const authService = require("../repository/authOperation");
const returnReponse = require("../util/handler/responseSend");

exports.controller_login = (req, res) => {
    try {
        return authService.login(req, res);
    } catch (error) {
        returnReponse(res, 500, 'Error In Login Process', 'F', error.message)
    }
}