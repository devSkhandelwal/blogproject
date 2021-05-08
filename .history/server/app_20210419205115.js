const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const postRoutes = require('./routers/postRoutes')

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());


app.use('/api',postRoutes);


app.all('*',(req,res,next)=>{
    next()
})

app.use((err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json()
})


const PORT = process.env.PORT;
app.listen(PORT,console.log(`server is running at ${PORT}`));

module.exports = app;