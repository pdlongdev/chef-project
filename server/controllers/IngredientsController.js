const Ingredients = require('../models/Ingredients');
const initData = (req,res) => {
    Ingredients
        .insertMany([
            {
                name: "Cá",
                unit: "kg"
            },
            {
                name: "Tôm",
                unit: "kg"
            },
            {
                name: "Bào ngư",
                unit: "kg"
            },
            {
                name: "Vịt",
                unit: "kg"
            },
            {
                name: "Bò",
                unit: "kg"
            },
            {
                name: "Ngan",
                unit: "kg"
            }
        ])
        .catch( err => console.log(err));
}
const getAll = async (req,res) => {
    const ingredients = await  Ingredients.find({})
    res.send(ingredients)
}
// const findById = (req,res) => {
//     Ingredients
//         .find
// }
module.exports = {
    initData,
    getAll
}