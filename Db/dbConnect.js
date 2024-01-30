const mongoose = require('mongoose')

module.exports = dbconnect = async (url) => {
    return await mongoose.connect(url);
}