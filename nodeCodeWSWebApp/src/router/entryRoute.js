const express = require('express');
const router = express.Router();
const authRoute = require('./authRoute')
const category = require('./categoryRoute')
const services = require('./servicesRoute')
const auth = require('../middleware/authentication')

router.use('/authOperation', authRoute)
router.use('/categoryOperation', auth, category)
router.use('/servicesOperation', auth, services)
module.exports = router