const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const videoSchema = new Schema({
    columnOnePreview: String,
    columnOneVideo: String,
    columnTwoPreview: String,
    columnTwoVideo: String,
    columnThreePreview: String,
    columnThreeVideo: String
});

module.exports = mongoose.model('video', videoSchema, 'videos')