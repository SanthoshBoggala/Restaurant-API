const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    item: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'menuitems',
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['successfull', 'failed', 'pending'],
        default: 'pending'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('orders', orderSchema);