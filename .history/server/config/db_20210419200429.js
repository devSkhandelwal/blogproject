const mongoose = require('mongoose')


const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useNewUrlParser:true
    })
}