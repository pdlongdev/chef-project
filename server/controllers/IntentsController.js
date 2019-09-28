const Intents = require('../models/intents');

const initData = (req, res) => {
    Intents
        .insertMany([
            {
                name: 'Giảm cân'
            },
            {
                name: 'Trẻ em dưới một tuổi'
            },
            {
                name: 'Ăn kiêng'
            },
            {
                name: 'Cho phái nữ'
            }
        ])
}
const getAll = async (req,res) => {
    intents = await Intents.find();
    res.send(intents);
}

module.exports = {
    getAll,
    initData
}