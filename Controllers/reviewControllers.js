const asyncHandler = require('express-async-handler');
const Reviews = require('../Models/reviewModel');
const MenuItems = require('../Models/menuItemModel'); 

const getAllReviews = asyncHandler (async (req, res) => {
    const reviews = await Reviews.find();
    res.json({reviews});
});
const getAllMyReviews = asyncHandler (async (req, res) => {
    const reviews = await Reviews.find();
    res.json({reviews});
});
const getSingleReview = asyncHandler (async (req, res)=>{
    const review = await Reviews.findById(req.params.id);
    if(!review) {
        res.status(400);
        throw new Error('review not found');
    }
    rs.json({review});
});
const addSingleReview = asyncHandler(async (req, res)=>{
    const { itemId, comment , user , rating} = req.body;
    if(!itemId || !comment || !user || !rating) {
        res.status(400);
        throw new Error('provide all fields');
    }    
    const item = await MenuItems.findById(itemId);
    if(!item) {
        res.status(400);
        throw new Error('item not found');        
    }
    const newReview = await Reviews.create({ item : itemId, user, comment, rating });
    res.json({newReview});
});
const updateSingleReview = asyncHandler(async (req, res)=>{
    const updatedReview = await Reviews.findByIdAndUpdate(req.params.id, req.body);
    if(!updatedReview) {
        res.status(400);      
        throw new Error('review not found');        
    } 
    res.json({updatedReview});
});
const deleteSingleReview = asyncHandler(async (req, res)=>{
    const deletedReview = await Reviews.findByIdAnddelete(req.params.id);
    if(!deletedReview) {
        res.status(400);      
        throw new Error('review not found');        
    } 
    res.json({deletedReview});
});

module.exports = {
    getAllReviews,
    getAllMyReviews,
    getSingleReview,
    addSingleReview,
    updateSingleReview,
    deleteSingleReview
};