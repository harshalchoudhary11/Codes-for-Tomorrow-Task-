const express = require('express');
const controllerCategory = require('../controller/categoryProcess');


const router = express.Router();

router.post('/category', controllerCategory.categoryCreate);
router.get('/categories', controllerCategory.getAllCategory);
router.put('/category/:categoryId', controllerCategory.update);
router.delete('/category/:categoryId', controllerCategory.delete)

module.exports = router;