const mongoose = require('mongoose');
const Sessions_holifaysSchema = new mongoose.Schema({
    _id: String,
    name:String,
}) 
const Sessions_holidays  = mongoose.model("sessions_holifays",Sessions_holifaysSchema);
module.exports = Sessions_holidays;