const Cooking = require('../models/cooking')
const initData = (req,res) => {
    Cooking
        .insertMany([
            {
                name: "Lẩu"
            },
            {
                name: "Xào"
            },
            {
                name: "Hầm"
            },
            {
                name: "Ướp"
            },
            {
                name: "Om"
            },
        ])
}
const getAll = async(req,res)=>{
    const cooking = await Cooking.find();
    res.send(cooking);
}
module.exports = {
    initData,
    getAll

}