const mongoose = require('mongoose');
const recipesSchema = new mongoose.Schema({
    _id: String,
    name:String,
    pathPhoto: String,
    pathSlide:String,
    pathRecipe:String,
    ingredientsId: String
}) 
const Recipes  = mongoose.model("recipes",recipesSchema);

module.exports = Recipes;