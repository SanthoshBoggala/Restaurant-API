const mongoose = require('mongoose');

const cartItemsSchema = new mongoose.Schema({
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuitems',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    count: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('cartitems', cartItemsSchema);