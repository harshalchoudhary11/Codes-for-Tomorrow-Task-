const express = require('express');
const { controller_login } = require('../controller/loginProcess');
const router = express.Router();

router.get('/login', controller_login)

module.exports = router;