const express = require('express')

const postController = require('../controllers/postController');
const authController = require('../controllers/authController')

const router = express.Router()

router.route('/addpost').post(authController.protect,postController.addPost);
router.route('/getposts').get(postController.getPosts);

router.route('/myposts').get(authController.protect,postController.getMyPosts);
router.route('/post/:id').get(postController.getPost);
router.route('/update/post/:id').patch(postController.updatePost);
router.route('/delete/post/:id').delete(authController.protect,postController.deletePost);



module.exports = router;