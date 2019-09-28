const mongoose = require('mongoose');
const DATABASE_URL = "mongodb://localhost:27017/chef_db";

//Models
const Menus = require('./menus');


//Connection
const connectDb = () => {
  return mongoose.connect(DATABASE_URL,{useNewUrlParser: true, useUnifiedTopology: true });
};
const models = { Menus};

module.exports = {
    connectDb,
    models
}