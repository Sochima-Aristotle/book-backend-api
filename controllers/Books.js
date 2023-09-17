const path = require('path');
// const slugify = require("slugify");
// const ErrorResponse = require('../utils/errorResponse');
const Books = require('../models/Books');

// @desc      Get all books details
// @route     GET /api/books
// @access    Public
exports.getAllBooks = async (req, res, next) => {

try {
  const books = await Books.find()

  res.status(200).json({
    success: true,
    count: books.length,
    data: books
  })
} catch (error) {
  res.status(400).json({
    success: false,

  })
}
  
};


// @desc      Get single book details
// @route     GET /api/books/:id
// @access    Public
exports.getBook = async (req, res, next )=> {
  try {
    const books = await Books.findById(req.params.id)
  if(!books){
   return res.status(400).json({
      success: false,
    })
  }
    res.status(200).json({
      success: true,
      data: books
    })
  } catch (error) {
    res.status(400).json({
      success: false,
  
    })
  }
};



// @desc      create book details
// @route     POST /api/books
// @access    Private
exports.createBook = async (req, res, next) => {

  try {
    const books  = await Books.create(req.body)
  
  console.log(books);
  
  res.status(201).json({
    
    data: books
  });
    
  } catch (error) {
    req.status(400).json({
      success: false
    })    
  }
  
  
};



// @desc      Update book details
// @route     PUT /api/books/:id
// @access    Private
exports.updateBook = async (req, res, next) => {
  try {
    const books = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runvalidator: true
    })
  
    if(!books){
      return res.status(400).json({
         success: false,
       })
      }
    res.status(200).json({
      success: true,
      data: books
    })
  } catch (error) {
    res.status(400).json({
      success: false,
  
    })
  }
};



// @desc      Get all bootcamps
// @route     DELETE /api/books/:id
// @access    Private
exports.deleteBook = async (req, res, next) => {
  try {
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
  } catch (error) {
    res.status(400).json({
      success: false,
  
    })
  }
};