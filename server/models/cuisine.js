const mongoose = require('mongoose');
const CuisineSchema = new mongoose.Schema({
    _id: String,
    name:String,
}) 
const Cuisine  = mongoose.model("cuisine",CuisineSchema);
module.exports = Cuisine;