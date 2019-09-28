var express = require('express');
var router = express.Router();
//Controller
const ingredientsController = require('../controllers/IngredientsController')
const categoriesController = require('../controllers/CategoriesController')
const holidaysController = require('../controllers/Sessions_HolidaysController')
/* GET home page. */
router.get('/', ingredientsController.initData);
router.get('/ingredients', ingredientsController.getAll);
router.get('/categories', categoriesController.initData);
router.get('/init-holidays', holidaysController.initData);
router.get('/holidays', holidaysController.getAll);

module.exports = router;
