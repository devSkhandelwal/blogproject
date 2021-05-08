const express = require('express')

const postController = require('../controllers/postController');

const router = express.Router()

router.route('/addpost').post(postController.addPost);
router.route('/getposts').get(postController.getPosts);
router.route('/post/:id')


module.exports = router;