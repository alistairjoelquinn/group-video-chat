const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({});

module.exports = mongoose.model('Store', storeSchema);