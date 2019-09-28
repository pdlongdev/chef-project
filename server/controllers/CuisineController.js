const Cuisine = require('../models/cuisine');
const initData = (req,res) => {
    Cuisine
        .insertMany([
            {
                name: "Việt Nam",
            },
            {
                name: "Nhật Bản",
            },
            {
                name: "Trung Quốc",
            },
            {
                name: "Hàn Quốc",
            },
            {
                name: "Nga",
            },
            {
                name: "Ấn Độ",
            }
        ])
        .catch( err => console.log(err));
}
const getAll = async (req,res) => {
    const cuisine = await  Cuisine.find({})
    res.send(cuisine)
}
// const findById = (req,res) => {
//     Ingredients
//         .find
// }
module.exports = {
    initData,
    getAll
}