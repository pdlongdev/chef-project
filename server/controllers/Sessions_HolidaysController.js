const Sessions_Holidays = require('../models/sessions_holidays');
const mongose = require('mongoose');
const initData = (req,res) => {
    Sessions_Holidays
        .insertMany([
            {
                name: "Tết",
            },
            {
                name: "Giáng Sinh",
            },
            {
                name: "SInh Nhật",
            },
            {
                name: "Halloween",
            },
            {
                name: "Lễ hỏi - Cưới",
            },
            {
                name: "Valentine",
            }
        ])
        .catch( err => console.log(err));
}
const getAll = async (req,res) => {
    const sessions_Holidays = await  Sessions_Holidays.find({})
    res.send(sessions_Holidays)
}
// const findById = (req,res) => {
//     Ingredients
//         .find
// }
module.exports = {
    initData,
    getAll
}