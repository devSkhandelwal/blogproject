const express = require('express')

const postController = require('../controllers/postController');

const router = express.Router()

router.route('/addPost',postController.addPost)


module.exports = router;