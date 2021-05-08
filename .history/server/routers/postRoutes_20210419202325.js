const express = require('express')

const postController = require('../controllers/postController');

const router = express.Router()

router.route('/addPost').post(postController.addPost)


module.exports = router;