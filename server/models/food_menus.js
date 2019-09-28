const mongoose = require('mongoose')

const FoodMenusSchema = mongoose.Schema({
    _id: String,
    name: String
})

const FoodMenus = mongoose.model('food_menus',FoodMenusSchema);
module.exports  = FoodMenus;