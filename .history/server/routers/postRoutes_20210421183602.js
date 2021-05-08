const express = require('express')

const postController = require('../controllers/postController');
const authController = require('../controllers/authController')

const router = express.Router()

router.route('/addpost').post(postController.addPost);
router.route('/getposts').get(postController.getPosts);
router.route('/post/:id').get(postController.getPost);
router.route('/update/post/:id').patch(postController.updatePost);
router.route('/post/delete/:id').delete(authController.protect,postController.deletePost);



module.exports = router;