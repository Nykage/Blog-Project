const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: String,
    date: String,
    thumbnail: String,
    title: String,
    postText: String
});

module.exports = mongoose.model('blogpost', postSchema, 'blogposts')