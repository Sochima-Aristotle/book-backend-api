const path = require('path');
// const slugify = require("slugify");
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require("../middleware/asyncHandler")
const Books = require('../models/Books');

// @desc      Get all books details
// @route     GET /api/books
// @access    Public
exports.getAllBooks = asyncHandler(async(req, res, next) => {


  const books = await Books.find()

  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  })

  res.status(400).json({
    success: false,

  })

});


// @desc      Get single book details
// @route     GET /api/books/:id
// @access    Public
exports.getBook = asyncHandler(async(req, res, next )=> {
  
  const books = await Books.findById(req.params.id)
  
  if(!books){
   return next( 
    new ErrorResponse(`cannot get a book with the id of id ${req.params.id}`)
   )
  }

    res.status(200).json({
      success: true,
      data: books
    })
  
})



// @desc      create book details
// @route     POST /api/books
// @access    Private
exports.createBook = asyncHandler(async(req, res, next) => {

  
    const books  = await Books.create(req.body)

  
  res.status(201).json({
    success: true,
    data: books
  });
    
  
   
  
  
});



// @desc      Update book details
// @route     PUT /api/books/:id
// @access    Private
exports.updateBook = asyncHandler(async(req, res, next) => {
  
    const books = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidator: true
    })
  
    if(!books){
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
exports.deleteBook = asyncHandler(async(req, res, next) => {
  
    const books = await Books.findByIdAndDelete(req.params.id)
  
    if(!books){
      return res.status(400).json({
         success: false,
       })
      }
    res.status(200).json({
      success: true,
      data: {}
    })
  
   
});

// @desc      Updload book photo 
// @route     PUT /api/books/:id/photo
// @access    Private
exports.uploadBookPhoto = asyncHandler(async(req, res, next) => {
  
    const books = await Books.findById(req.params.id)
  
    if(!books){
      return next(
        new ErrorResponse(`cannot get any book with the id of ${req.params.id}`, 404)
        )
      }

      
   if(!req.files){
    return next(new ErrorResponse(`Please add a file`, 400))
   }
  
});
