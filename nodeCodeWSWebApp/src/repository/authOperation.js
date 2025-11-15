const jwt = require('jsonwebtoken');
const returnReponse = require('../util/handler/responseSend');
const { User } = require('../models');
const SALT = process.env.JWT_SALT;
const SCREACT_KEY = process.env.JWT_SCREACT_KEY;
const bcrypt = require('bcrypt')
const authService = {

    login: async (req, res) => {
        const { email, password } = req.body;

        if (email !== "admin@codesfortomorrow.com" || password !== "Admin123!@#") {
            returnReponse(res, 400, 'Invalid Credentials', "F", null)
        }
        try {
            const payload = { key: SCREACT_KEY };
            const tokenGenerater = jwt.sign(payload, SCREACT_KEY + SALT, { expiresIn: "1h" })

            const user = await User.findOne({ where: { email } });

            if (!user) {
                await User.create({ email, password: await bcrypt.hash(password, 11) });
            }

            returnReponse(res, 200, "token Generated Successfully", "S", tokenGenerater)
        }
        catch (error) {
            returnReponse(res, 500, "error in token generation method", "F", error.message);
        }
    }
}

module.exports = authService;