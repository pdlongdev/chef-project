var express = require('express');
var router = express.Router();
//Controller
const ingredientsController = require('../controllers/IngredientsController')
const categoriesController = require('../controllers/CategoriesController')
const holidaysController = require('../controllers/Sessions_HolidaysController')
const cuisineController = require('../controllers/CuisineController')
const cookingController = require('../controllers/CookingController')
const foodMenusController = require('../controllers/FoodMenusController')
const intentsController = require('../controllers/IntentsController')
/* GET home page. */
router.get('/', ingredientsController.initData);
router.get('/ingredients', ingredientsController.getAll);
router.get('/categories', categoriesController.initData);
router.get('/init-holidays', holidaysController.initData);
router.get('/holidays', holidaysController.getAll);
router.get('/init-cuisine', cuisineController.initData);
router.get('/cuisine', cuisineController.getAll);
router.get('/init-cooking', cookingController.initData);
router.get('/init-food-menus', foodMenusController.initData);
router.get('/food-menus', foodMenusController.getAll);
router.get('/init-intents', intentsController.initData);
router.get('/intents', intentsController.getAll);

module.exports = router;
