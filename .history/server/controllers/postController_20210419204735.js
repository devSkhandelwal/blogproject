const PostModel = require("../models/postModel");
const catchAsync = require("../utils/catchAsync");

exports.addPost = catchAsync(async (req,res,next) => {
    const title = req.body.title;
    const description = req.body.description;

    if(!title || !description){

    }

    const newPost = PostModel({
        title,
        description
    });

    

    await newPost.save();

    res.status(200).json(newPost)

})