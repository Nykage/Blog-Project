const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://userpiia:pwpiia@etheriadb-ei9es.mongodb.net/etheriadb?retryWrites=true&w=majority"
const Image = require('../models/image');
const Video = require('../models/video');
const AnimeReview = require('../models/animereview');
const GameReview = require('../models/gamereview');
const BlogPost = require('../models/blogpost');

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request')
    }
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            this.connect.log(error)
        } else {
            let payload = { subject: registeredUser._id }
            let secretKey = "secret Key"
            let token = jwt.sign(payload, secretKey)
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    
    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            this.connect.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else
            if (user.username !== userData.username) {
                res.status(401).send('Invalid username')
            } else
            if (user.password !== userData.password) {
                res.status(401).send('Invalid password')
            } else {
                let payload = { subject: user._id }
                let secretKey = "secret Key"
                let token = jwt.sign(payload, secretKey)
                res.status(200).send({token})
            }
        }
    })
})

router.get('/gallery', function(req, res) {
    console.log('Get request for all videos');
    Image.find({})
    .exec(function(err, images) {
        if (err) {
            console.log("Error retrieving images");
        } else {
            res.json(images);
        }
    });
});

router.post('/gallerypost', function(req, res) {
    console.log('Post an image');
    var newImage = new Image();
    newImage.columnOne = req.body.columnOne;
    newImage.columnTwo = req.body.columnTwo;
    newImage.columnThree = req.body.columnThree;
    newImage.save(function(err, insertedImage) {
        if (err) {
            console.log('Error saving image');
        } else {
            res.json(insertedImage);
        }
    });
});

router.get('/videos', function(req, res) {
    console.log('Get request for all videos');
    Video.find({})
    .exec(function(err, videos) {
        if (err) {
            console.log("Error retrieving videos");
        } else {
            res.json(videos);
        }
    });
});

router.post('/videospost', function(req, res) {
    console.log('Post a video');
    var newVideo = new Video();
    newVideo.columnOnePreview = req.body.columnOnePreview;
    newVideo.columnOneVideo = req.body.columnOneVideo;
    newVideo.columnTwoPreview = req.body.columnTwoPreview;
    newVideo.columnTwoVideo = req.body.columnTwoVideo;
    newVideo.columnThreePreview = req.body.columnThreePreview;
    newVideo.columnThreeVideo = req.body.columnThreeVideo;
    newVideo.save(function(err, insertedVideo) {
        if (err) {
            console.log('Error saving video');
        } else {
            res.json(insertedVideo);
        }
    });
});

router.get('/animereviews', function(req, res) {
    console.log('Get request for all animereviews');
    AnimeReview.find({})
    .exec(function(err, animereviews) {
        if (err) {
            console.log("Error retrieving anime reviews");
        } else {
            res.json(animereviews);
        }
    });
});

router.post('/animereviewspost', function(req, res) {
    console.log('Post an anime review');
    var newAnimeReview = new AnimeReview();
    newAnimeReview.user = req.body.user;
    newAnimeReview.thumbnail = req.body.thumbnail;
    newAnimeReview.title = req.body.title;
    newAnimeReview.rating = req.body.rating;
    newAnimeReview.reviewText = req.body.reviewText;
    newAnimeReview.save(function(err, insertedAnimeReview) {
        if (err) {
            console.log('Error saving anime review');
        } else {
            res.json(insertedAnimeReview);
        }
    });
});

router.get('/gamereviews', function(req, res) {
    console.log('Get request for all gamereviews');
    GameReview.find({})
    .exec(function(err, gamereviews) {
        if (err) {
            console.log("Error retrieving game reviews");
        } else {
            res.json(gamereviews);
        }
    });
});

router.post('/gamereviewspost', function(req, res) {
    console.log('Post an game review');
    var newGameReview = new GameReview();
    newGameReview.user = req.body.user;
    newGameReview.thumbnail = req.body.thumbnail;
    newGameReview.title = req.body.title;
    newGameReview.rating = req.body.rating;
    newGameReview.reviewText = req.body.reviewText;
    newGameReview.save(function(err, insertedGameReview) {
        if (err) {
            console.log('Error saving game review');
        } else {
            res.json(insertedGameReview);
        }
    });
});

router.get('/blogposts', function(req, res) {
    console.log('Get request for all blogposts');
    BlogPost.find({})
    .exec(function(err, blogposts) {
        if (err) {
            console.log("Error retrieving blogposts");
        } else {
            res.json(blogposts);
        }
    });
});

router.post('/postblogpost', function(req, res) {
    console.log('Post a blogpost');
    var newBlogPost = new BlogPost();
    newBlogPost.user = req.body.user;
    newBlogPost.date = req.body.date;
    newBlogPost.thumbnail = req.body.thumbnail;
    newBlogPost.title = req.body.title;
    newBlogPost.postText = req.body.postText;
    newBlogPost.save(function(err, insertedBlogPost) {
        if (err) {
            console.log('Error saving blogpost');
        } else {
            res.json(insertedBlogPost);
        }
    });
});

module.exports = router