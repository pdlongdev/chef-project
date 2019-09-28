const mongose = require('mongoose');

const IntentsSchema = mongose.Schema({
    _id:String,
    name:String
})

const Intents = mongose.model('intents',IntentsSchema);

module.exports = Intents;