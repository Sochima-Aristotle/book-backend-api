const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const books = require('./routes/books')
const morgan = require('morgan')
const connectDB = require('./config/db')




// loading the config var
dotenv.config({path: './config/config.env'})
connectDB()

 const PORT = process.env.PORT || 5000

const app = express()

if(process.env.NODE_ENV= 'development'){
    app.use(morgan('dev'))
}

app.use('/api/books', books)

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
)