const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});


userSchema.pre('save',async function  (next) {
    if(!this.isModified('password')) return next;

    this.password =await bcrypt.hash(this.password,12);

    next()
})

userSchema.method.checkPassword = async function(enterdPassword,userPassword){
    return await bcrypt.compare(enterdPassword,userPassword)
}

const userModel = mongoose.model('User',userSchema)

module.exports = userModel;
