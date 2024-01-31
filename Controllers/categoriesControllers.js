const asyncHandler = require('express-async-handler');
const Categories = require('../Models/categoryModel');

const getAllCategories = asyncHandler (async (req, res) => {
    const categories = await Categories.find();
    res.json({categories});
});
const getSingleCategory = asyncHandler (async (req, res)=>{
    const category = await Categories.findOne({type: req.params.id});
    if(!category) {
        res.status(400);
        throw new Error('category not found');
    }
    res.json({category});
});
const addSingleCategory = asyncHandler(async (req, res)=>{
    const {category} = req.body;
    if(!category) {
        res.status(400);
        throw new Error('provide category');
    }
    const newCategory = await Categories.create({type: category});
    res.json({newCategory});
});
const updateSingleCategory = asyncHandler(async (req, res)=>{
    const { category } = req.body;
    if(!category) {
        res.status(400);
        throw new Error('provide category');
    }
    const updatedCategory = await Categories.findOneAndUpdate({ type : req.params.id}, { type: category});
    if(!updatedCategory) {
        res.status(400);
        throw new Error('category not found');
    }
    res.json({updatedCategory});
});
const deleteSingleCategory = asyncHandler(async (req, res)=>{
    const { id } = req.params;
    if(!id) {
        res.status(400);
        throw new Error('provide category');
    }
    const deletedCategory = await Categories.findOneAndDelete({ type : req.params.id })
    if(!deletedCategory) {
        res.status(400);
        throw new Error('category not found');
    }
    res.json({deletedCategory});
});

module.exports = {
    getAllCategories,
    getSingleCategory,
    addSingleCategory,
    updateSingleCategory,
    deleteSingleCategory
};