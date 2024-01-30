const mongoose = require('mongoose');

const tableReservationSchema = new mongoose.Schema({
    table : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'tables',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    timings: {
        type: String,
        enum: ['morning', 'afternoon', 'evening', 'night'],
        required: true
    }
})

module.exports = mongoose.model('tableReservations', tableReservationSchema);