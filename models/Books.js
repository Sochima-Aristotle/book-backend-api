const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  Shelf_Owner:{
    type: String,
    require: true
  },
  title: {
    type: String,
    require: [true, 'Please add a book title'],
  },
  slug: String,
  subtitle: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  publishedDate: {
    type: String

  },

  purcheseDate: {
    type: String,

  },
  description: String,
  pageCount: Number,
  printType: String,
  category: String,
  rating: Number,
  maturityRating: String,
  imgUrl: {
    type: String,
    default: 'no-photo.jpg'
  },
  language: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  shelf: {
    type: String,
    enum: ['read', 'Currently reading', 'not read', 'none'],
    required: [true, 'Please add an email'],
    // default: 'none'
  },
  isBorrowed: {
    type: Boolean,
    default: false,
    require: true
  },
  borrowedBy: String,
  retureDate: {
    type: String,
    msg: 'Given on trust and for knowledge seek',
    default: "null"
  }

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

