const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors');
const errorHandler = require('./middleware/errorHandle')
const cookieParser = require('cookie-parser')
const books = require('./routes/books')
const users = require('./routes/users')
const morgan = require('morgan')
const bookPhoto = require('express-fileupload')
const connectDB = require('./config/db')


// loading the config var
dotenv.config({ path: './config/config.env' })
connectDB()

const PORT = process.env.PORT || 8000

const app = express()


app.use(express.json())
app.use(cookieParser())

// Enable CORS 
app.use(cors());

if (process.env.NODE_ENV = 'development') {
    app.use(morgan('dev'))
}
app.use(bookPhoto())

app.use('/api/books', books)
app.use('/api/user', users)
app.use(errorHandler)

const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`.yellow.bold)
)

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);

    // Close server & exit process
    server.close(() => process.exit(1))
})