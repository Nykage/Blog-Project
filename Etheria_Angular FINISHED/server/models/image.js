const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const imageSchema = new Schema({
    columnOne: String,
    columnTwo: String,
    columnThree: String
});

module.exports = mongoose.model('image', imageSchema, 'gallery')