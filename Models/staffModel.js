const mongoose = require('mongoose');

const staffModel = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['chef', 'cooks', 'servers', 'hostess', 'dishwasher', 'cashier'],
        required: true 
    },
    startDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('staff', staffModel);