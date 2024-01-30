const asyncHandler = require('express-async-handler');
const MenuItems = require('../Models/menuItemModel'); 
const Categories = require('../Models/categoryModel');

const getAllMenu = asyncHandler (async (req, res) => {
    const items = await MenuItems.find();
    res.json({items});
});
const getSingleMenuItem = asyncHandler (async (req, res)=>{
    const item = await MenuItems.findById(req.params.id);
    res.json({item});
});
const addSingleMenuItem = asyncHandler(async (req, res)=>{
    const {name, category, price} = req.body;
    if(!name || !category || !price){
        res.status(400);
        throw new Error('provide all fields');
    }

    const categoryFound = await Categories.find({type : category});
    if(!categoryFound) {
        res.status(400);
        throw new Error('category not found');
    }
    const newItem = await MenuItems.create(req.body);
    res.json({newItem});
});
const updateSingleMenuItem = asyncHandler(async (req, res)=>{
    const updatedItem = await MenuItems.findByIdAndUpdate(req,params.id, req.body);
    if(!updatedItem) {
        res.status(400);
        throw new Error('item not found');
    }
    res.json({updatedItem});
});
const deleteSingleMenuItem = asyncHandler(async (req, res)=>{
    const deletedItem = await MenuItems.findByIdAndDelete(req,params.id);
    if(!deletedItem) {
        res.status(400);
        throw new Error('item not found');
    }
    res.json({deletedItem});
});

module.exports = {
    getAllMenu,
    getSingleMenuItem,
    addSingleMenuItem,
    updateSingleMenuItem,
    deleteSingleMenuItem
};