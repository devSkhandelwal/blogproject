const UserModel = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');


exports.getAllUsers = catchAsync(async(req,res,next)=>{
    const users = await UserModel.find()


    res.status(200).json(users)
});

exports.findMe = catchAsync(async(req,res,next)=>{
    const myProfile = await UserModel.findById(req.user._id)

    if(!myProfile){
        return next(new AppError("no user found"))
    }

    res.status(200).json(myProfile)
})


exports.updateMe = catchAsync(async(req,res,next)=>{

    const user = await UserModel.findByIdAndUpdate(req.user._id)


    res.status(200).json(users)
});