const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const books = require('./routes/books')

// loading the config var
dotenv.config({path: './config/config.env'})

 const PORT = process.env.PORT || 5000

const app = express()

app.use('/api/books', books)

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
)