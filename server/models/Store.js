const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        trim: true
    },
    password: {
        type: String
    },
    imageUrl: {
        type: String
    }
});

module.exports = mongoose.model('Store', storeSchema);