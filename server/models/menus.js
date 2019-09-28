const mongoose = require('mongoose');
const menusSchema = new mongoose.Schema({
    _id: String,
    title:String,
    link:String
}) 
const Menus  = mongoose.model("menus",menusSchema);

module.exports = Menus;