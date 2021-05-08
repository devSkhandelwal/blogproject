const express = require('express')

const postController = require('../controllers/postController');

const router = express.Router()

router.route('/addpost').post(postController.addPost)


module.exports = router;