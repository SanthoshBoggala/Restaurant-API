const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    type: {
        type: String,
        required: true
    },
    report: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("reports", reportSchema);