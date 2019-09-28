const Categories = require('../models/Categories');
const mongose = require('mongoose');
const initData = (req,res) => {
    Categories
        .insertMany([
            {
                name: "Lẩu",
            },
            {
                name: "Xào",
            },
            {
                name: "Kho",
            },
            {
                name: "Luộc",
            },
            {
                name: "Salad",
            },
            {
                name: "Chay",
            }
        ]);
}
const getAll = async (req,res) => {
    const categories = await  Categories.find({})
    res.send(categories)
}
module.exports = {
    initData,
    getAll
}