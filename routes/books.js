const express = require('express')
const router = express.Router()

const {getAllBooks} = require('../controllers/Books')

router.
route('/').get(getAllBooks)

module.exports = router; 