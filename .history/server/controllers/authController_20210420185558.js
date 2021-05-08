const userModel = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const jwt = require('jsonwebtoken')
const AppError = require('../utils/appError')

const signToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPRIES_IN
    })
} 

exports.register = catchAsync(async(req,res,next)=>{
    console.log(process.env.JWT_SECRET)
    const newUser = await userModel.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });

    res.status(200).json({
        id:newUser._id,
        name:newUser.name,
        email:newUser.email,
        token:signToken(newUser._id)

    });

});


exports.login = catchAsync(async(req,res,next)=>{

    const {email,password} = req.body


    const user = await userModel.findOne({email}).select('+password')

    
    if(!user || !(await user.checkPassword(password,user.password) )){
        return next(new AppError('Email or password not correct',401))
    }

   
    res.status(201).json({
        id:user._id,
        name:user.name,
        email:user.email,
        token:signToken(user._id)

    });
    
});

exports.protect = catchAsync(async(req,res,next)=>{

    let token;
    console.log(req.headers.autharaization)
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
      ) {
        token = req.headers.authorization.split(' ')[1];
      }

    if(!token){ 
        return next(new AppError('login required',401));
    }

    decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET);

    const currentUser = await userModel.findById(decoded.id);

    if(!currentUser){
        return next(
            new AppError(
              'The user belonging to this token does no longer exist.',
              401
            )
          );
    }

    req.user = currentUser;
    next();
})