const express = require('express')
const router = express.Router()

const {
    getAllBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/Books')

router.
route('/')
.get(getAllBooks)
.post(createBook)

router
.route('/:id')
.get(getBook)
.put(updateBook)
.delete(deleteBook)

module.exports = router; 