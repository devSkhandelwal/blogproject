const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const postRoutes = require('./routers/postRoutes');
const userRoutes = require('./routers/userRoutes');
const AppError = require('./utils/appError');

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api',postRoutes);
app.use('/api',userRoutes);


app.all('*',(req,res,next)=>{
    next(new AppError('page not found',404))
})

app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        stack:err.stack
    })
})


const PORT = process.env.PORT;
app.listen(PORT,console.log(`server is running at ${PORT}`));

module.exports = app;