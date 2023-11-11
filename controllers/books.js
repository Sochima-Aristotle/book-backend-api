const path = require('path');
// const slugify = require("slugify");
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require("../middleware/asyncHandler")
const Books = require('../models/Books');
const users = require('../models/Users');

// @desc      Get all books details
// @route     GET /api/books
// @access    Public
exports.getAllUserBooks = asyncHandler(async (req, res, next) => {
  // Check if the user is logged in
  if (!req.user) {
    return next(
      new ErrorResponse(`User not authorized. Please log in.`, 401)
    );
  }

  // Assuming that `req.user.id` is set during authentication
  const userId = req.user.id;

  // Retrieve all books associated with the logged-in user
  const userBooks = await Books.find({ user: userId });

  // Check if the user has any books
  if (!userBooks || userBooks.length === 0) {
    return next(
      new ErrorResponse(`User ${userId} does not have any books.`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: userBooks,
  });
});



// @desc      Get single book details
// @route     GET /api/books/:id
// @access    Public
exports.getBook = asyncHandler(async (req, res, next) => {
  // Assuming that `req.user.id` is set during authentication
  const userId = req.user.id;

  const book = await Books.findById(req.params.id);

  if (!book) {
    return next(
      new ErrorResponse(`Book not found with the id ${req.params.id}`, 404)
    );
  }

  // Make sure user is the book owner
  if (book.user.toString() !== userId) {
    return next(
      new ErrorResponse(
        `User ${userId} is not authorized to access this book`,
        401
      )
    );
  }

  res.status(200).json({
    success: true,
    data: book,
  });
});




// @desc      create book details
// @route     POST /api/books
// @access    Private
exports.createBook = asyncHandler(async (req, res, next) => {
  console.log("id:", req.user);
  req.body.user = req.user.id

  // check for publishedBooks
  const publishedBooks = await Books.findOne({ user: req.user.id })

  const books = await Books.create(req.body)


  res.status(201).json({
    success: true,
    data: books
  });


});



// @desc      Update book details
// @route     PUT /api/books/:id
// @access    Private
exports.updateBook = asyncHandler(async (req, res, next) => {

  let books = await Books.findById(req.params.id)

  console.log("first:", books.user)

  if (!books) {
    return next(
      new ErrorResponse(`cannot get any book with the id of ${req.params.id}`, 404)
    )
  }

  // Make sure user is the book owner
  if (books.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this book`,
        401
      )
    );
  }

  // update slug while updating name
  if (Object.keys(req.body).includes("name")) {
    req.body.slug = slugify(req.body.name, { lower: true });
  }

  books = await Books.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runvalidator: true
  })

  if (!books) {
    return next(
      new ErrorResponse(`cannot get any book with the id of ${req.params.id}`, 404)
    )
  }
  res.status(200).json({
    success: true,
    data: books
  })

});



// @desc      Get all bootcamps
// @route     DELETE /api/books/:id
// @access    Private
exports.deleteBook = asyncHandler(async (req, res, next) => {

  const books = await Books.findByIdAndDelete(req.params.id)

  if (!books) {
    return res.status(400).json({
      success: false,
    })
  }

  if (books.user.toString() !== req.user.id) {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to delete this book`,
        401
      )
    );
  }

  res.status(200).json({
    success: true,
    data: {}
  })


});

// @desc      Updload book photo 
// @route     PUT /api/books/:id/photo
// @access    Private
exports.uploadBookPhoto = asyncHandler(async (req, res, next) => {

  const books = await Books.findById(req.params.id)

  if (!books) {
    return next(
      new ErrorResponse(`cannot get any book with the id of ${req.params.id}`, 404)
    )
  }


  if (!req.files) {
    return next(new ErrorResponse(`Please add a file`, 400))
  }

});





