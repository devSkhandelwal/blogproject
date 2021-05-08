const express = require('express')

const postController = require('../controllers/postController');
const authController = require('../controllers/authController')

const router = express.Router()

router.route('/addpost').get(authController.protect).post(postController.addPost);
router.route('/getposts').get(postController.getPosts);
router.route('/post/:id').get(postController.getPost);
router.route('/post/update/:id').patch(postController.updatePost);
router.route('/post/delete/:id').delete(postController.deletePost);



module.exports = router;