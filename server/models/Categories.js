const mongoose = require('mongoose');
const CategoriesSchema = new mongoose.Schema({
    _id: String,
    name:String,
}) 
const Categories  = mongoose.model("categories",CategoriesSchema);
module.exports = Categories;