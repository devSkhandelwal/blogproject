const UserModel = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');


exports.getAllUsers = catchAsync(async(req,res,next)=>{
    const users = await UserModel.find()


    res.status(200).json(users)
});

exports.findMe = catchAsync(async(req,res,next)=>{
    const myProfile = await UserModel.findById(req.user._id)
})


exports.updateMe = catchAsync(async(req,res,next)=>{

    const user = await UserModel.findByIdAndUpdate()


    res.status(200).json(users)
});