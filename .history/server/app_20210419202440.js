const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const postRoutes = require('./routers/postRoutes')

dotenv.config();
connectDB();
const app = express();
const app.use(express.json())



const PORT = process.env.PORT;
app.listen(PORT,console.log(`server is running at ${PORT}`));

module.exports = app;