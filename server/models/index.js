const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://localhost:27017/chef_db";

//Models
const Menus = require('./menus');
const Ingredients = require('./Ingredients');
const Categories = require('./categories');
const Sessions_holidays = require('./sessions_holidays');
const Cuisine = require('./cuisine');
const Cooking = require('./cooking');
const FoodMenus = require('./food_menus');
const Intents = require('./intents');
//Connection
const connectDb = () => {
  return mongoose.connect(DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true });
};
const models = { 
    Menus,
    Ingredients,
    Categories,
    Sessions_holidays,
    Cuisine,
    Cooking,
    FoodMenus,
    Intents

};

module.exports = {
    connectDb,
    models
}