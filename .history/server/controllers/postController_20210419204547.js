const PostModel = require("../models/postModel");
const catchAsync = require("../utils/catchAsync");

exports.addPost = catchAsync(async (req,res,next) => {
    const newPost = PostModel({
        title:req.body.title,
        description:req.body.description
    });

    await newPost.save();

    res.status(200).json(newPost)

})