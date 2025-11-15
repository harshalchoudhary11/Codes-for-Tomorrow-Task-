const jwt = require("jsonwebtoken");
const returnReponse = require("../util/handler/responseSend");
const SALT = process.env.JWT_SALT;
const SCREACT_KEY = process.env.JWT_SCREACT_KEY;

module.exports = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {
        returnReponse(res, 401, "Token Expired", "F", null)
    }

    try {
        req.user = jwt.verify(token, SCREACT_KEY + SALT)
        next();
    }
    catch (error) {
        returnReponse(res, 401, "Invalid Token", "F", null);
    }
}