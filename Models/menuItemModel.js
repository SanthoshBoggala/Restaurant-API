const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required : [true, "name should be provided"]
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