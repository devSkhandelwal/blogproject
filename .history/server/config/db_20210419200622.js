const mongoose = require('mongoose')


const connectDB = async () =>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false,
            useNewUrlParser:true
        })
    }catch(error){
        console.log(error)
        process.exit(1)
    }
    
}