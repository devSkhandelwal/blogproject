const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',

    }
},{
    timestamps:true
});

const PostModel = mongoose.model('Post',postSchema);

module.exports = PostModel;