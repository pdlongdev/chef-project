const FoodMenus = require('../models/food_menus');

const initData = (req,res) =>{
    FoodMenus
        .insertMany([
            {
                name: 'Món khai vị'
            },
            {
                name: 'Thức ăn nhanh'
            },
            {
                name: 'Thức uống'
            },
        ])
}
const getAll = async (req,res) => {
    const foodMenus = await FoodMenus.find();
    res.send(foodMenus);
}
module.exports = {
    initData,
    getAll
}