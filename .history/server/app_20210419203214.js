const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const postRoutes = require('./routers/postRoutes')

dotenv.config();
connectDB();
const app = express();

app.use(express.json());


app.use('/api',postRoutes);


const PORT = process.env.PORT;
app.listen(PORT,console.log(`server is running at ${PORT}`));

module.exports = app;