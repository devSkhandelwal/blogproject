const UserModel = require('../models/userModel');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const { signToken } = require('./authController');


exports.getAllUsers = catchAsync(async(req,res,next)=>{
    const users = await UserModel.find()


    res.status(200).json(users)
});

exports.getUserById = catchAsync(async(req,res,next)=>{
    const user = await UserModel.findById(req.params.id)

    if(!user){
        return (new AppError("no user found"))
    }
    
    res.status(200).json(user)
});


exports.deleteUser = catchAsync(async(req,res,next)=>{
    await UserModel.findByIdAndRemove(req.params.id);
    res.status(200).json({
        message:"success"
    });
});

exports.updateUser = catchAsync(async(req,res,next)=>{
    const updatedUser = await UserModel.findByIdAndUpdate(req.parmas.id,{
                                                            name:req.body.name,
                                                            email:req.body.email,
                                                            isAdmin:req.body.isAdmin
                                                        },{
                                                            new:true,
                                                            runValidators:true
                                                        })
    res.status(200).json({

    })
    
})


exports.findMe = catchAsync(async(req,res,next)=>{

    const myProfile = await UserModel.findById(req.user._id)

    if(!myProfile){
        return next(new AppError("no user found"))
    }

    res.status(200).json(myProfile)
})


exports.updateMe = catchAsync(async(req,res,next)=>{

    const user = await UserModel.findByIdAndUpdate(req.user._id,{
        name:req.body.name,
        email:req.body.email
    },{
        new:true,
        runValidators:true
    })

    if(!user){
        return next(new AppError("no user found"))
    }

    res.status(200).json({
        id:userser._id,
        name:userser.name,
        email:user.email,
        token:signToken(user._id)
    })
});