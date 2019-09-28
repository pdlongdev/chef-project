const mongoose = require('mongoose');
const CookingSchema = new mongoose.Schema({
    _id:String,
    name:String
})
const Cooking = mongoose.model('cooking',CookingSchema);
module.exports = Cooking;

