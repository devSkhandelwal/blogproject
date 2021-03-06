const express = require('express')

const dotenv = require('dotenv')

dotenv.config()


const app = express()

const PORT = process.env.PORT


app.listen(PORT,console.log(`server is running at ${PORT}`));

module.exports = app;