var express = require('express');
var router = express.Router();
//Controller
const ingredientsController = require('../controllers/IngredientsController')
/* GET home page. */
router.get('/', ingredientsController.initData);
router.get('/ingredients', ingredientsController.getAll);

module.exports = router;
