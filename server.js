const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const errorHandler = require('./middleware/errorHandle')
const books = require('./routes/books')
const users = require('./routes/users')
const auth = require('./routes/auth')
const morgan = require('morgan')
const bookPhoto = require('express-fileupload')
const connectDB = require('./config/db')


// loading the config var
dotenv.config({path: './config/config.env'})
connectDB()

 const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())

if(process.env.NODE_ENV= 'development'){
    app.use(morgan('dev'))
}
app.use(bookPhoto())

app.use('/api/books', books)
app.use('/api/users', users)
app.use('/api/auth', auth)
app.use(errorHandler)

const server = app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
)

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise)=>{
    console.log(`Error: ${err.message}`);

    // Close server & exit process
    server.close(() => process.exit(1))
})