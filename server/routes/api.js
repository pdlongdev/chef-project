var express = require('express');
var router = express.Router();
//Controller
const ingredientsController = require('../controllers/IngredientsController')
const categoriesController = require('../controllers/CategoriesController')
/* GET home page. */
router.get('/', ingredientsController.initData);
router.get('/ingredients', ingredientsController.getAll);
router.get('/categories', categoriesController.initData);

module.exports = router;
