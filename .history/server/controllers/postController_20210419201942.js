const PostModel = require("../models/postModel")

exports.addPost = async (req,res,next) => {
    const newPost = PostModel({
        title:req.body.title,
        description:req.body.description
    });

}