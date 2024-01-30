const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuitems',
        required: true     
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    } 
})

module.exports = mongoose.model("reviews", reviewSchema);