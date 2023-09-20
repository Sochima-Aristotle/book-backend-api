const express = require('express')
const router = express.Router()

const {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook,
    uploadBookPhoto
} = require('../controllers/books')

router.
route('/')
.get(getAllBooks)
.post(createBook)

router
.route('/:id')
.get(getBook)
.put(updateBook)
.delete(deleteBook)

router.route('/:id/photo').put(uploadBookPhoto)

module.exports = router; 