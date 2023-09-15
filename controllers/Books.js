const path = require('path');
// const slugify = require("slugify");
// const ErrorResponse = require('../utils/errorResponse');
const books = require('../models/Books');

// @desc      Get all books details
// @route     GET /api/books
// @access    Public
exports.getAllBooks = async (req, res, next) => {
  res.status(200).json({
    status: 200,
    data: 'getting all books'
  });
};


// @desc      Get single book details
// @route     GET /api/books/:id
// @access    Public
exports.getBook = async (req, res, next )=> {
  res.status(200).json({
    status: 200,
    mgs: `got the book with the id ${req.params.id}`
  });
};



// @desc      create book details
// @route     POST /api/books
// @access    Private
exports.createBook = async (req, res, next) => {
  res.status(200).json({
    status: 201,
    msg: 'created a book detail'
  });
};



// @desc      Update book details
// @route     PUT /api/books/:id
// @access    Private
exports.updateBook = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        mgs: `updated the book with the id ${req.params.id}`
      });
};



// @desc      Get all bootcamps
// @route     DELETE /api/books/:id
// @access    Private
exports.deleteBook = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        mgs: `Deleted the book with the id of ${req.params.id}`
      });
};