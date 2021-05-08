const PostModel = require("../models/postModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addPost = catchAsync(async (req,res,next) => {
    const title = req.body.title;
    const description = req.body.description;

    if(!title || !description){
        next(new AppError("please provide all fields",401))
    }

    const newPost = PostModel({
        title,
        description
    });
    await newPost.save();

    res.status(200).json(newPost)

})


exports.getPosts = catchAsync(async(req,res,next)=>{
    const allPosts = await PostModel.find()

    res.status(200).json(allPosts)
});

exports.getPost = catchAsync(async(req,res,next)=>{
    const getPost = await PostModel.findById(req.params.id)

    if(!getPost){
        
    }
})