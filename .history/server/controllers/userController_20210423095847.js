const UserModel = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllUsers = catchAsync(async(req,res,next)=>{
    const users = await UserModel.find()


    res.status(200).json(users)
})