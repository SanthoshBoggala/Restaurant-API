const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("categories", categorySchema);