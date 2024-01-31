const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "name should be provided"]
    },
    key: {
        type: String,
        required : [true, "name should be provided"],
        unique: true
    },
    type: {
        type: String,
        enum: [ 'non-veg', 'veg', 'none' ],
        default: 'none'
    },
    category: {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required : true
    }
})

module.exports = mongoose.model("menuitems", menuItemSchema);