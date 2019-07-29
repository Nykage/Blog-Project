const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: String,
    thumbnail: String,
    title: String,
    rating: String,
    reviewText: String
});

module.exports = mongoose.model('gamereview', reviewSchema, 'gamereviews')