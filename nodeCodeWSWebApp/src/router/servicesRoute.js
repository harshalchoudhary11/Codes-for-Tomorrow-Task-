const express = require('express');
const controllerService = require('../controller/servicePorcess');



const router = express.Router();

router.post('/:categoryId/service', controllerService.servicesCreate);
router.get('/:categoryId/services', controllerService.getAllServices);
router.put('/:categoryId/service/:serviceId', controllerService.updateServices);
router.delete('/:categoryId/service/:serviceId', controllerService.deleteServices)

module.exports = router;