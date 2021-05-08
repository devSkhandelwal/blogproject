const express= require('express');

const authController = require('../controllers/authController');
const userController = require('../controllers/userController')
const router = express.Router();

router.route('/login').post(authController.login);
router.route('/register').post(authController.register)


router.route('/users/all').get(authController.protect,userController.getAllUsers)
router.route("/user/profile").get(authController.protect,userController.findMe)
router.route("/user/:id").get(authController.protect,userController.getUserById)
router.route("/update/me").patch(authController.protect,userController.updateMe)



module.exports = router