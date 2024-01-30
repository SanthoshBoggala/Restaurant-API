const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    number: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ['standard dining tables', 'private dining tables', 'round tables'],
        required: true
    },
    price : {
        type: Number,
        required: true 
    }
})

module.exports = mongoose.model('tables', tableSchema);