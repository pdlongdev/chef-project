const mongoose = require('mongoose');
const IngredientsSchema = new mongoose.Schema({
    _id: String,
    name:String,
    unit:String
}) 
const Ingredients  = mongoose.model("ingredients",IngredientsSchema);
module.exports = Ingredients;