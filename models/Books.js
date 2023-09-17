const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title:{
    type: String,
     require: [true, 'Please add a book title'],
     unique: true
    },
    slug: String,
  subtitle:{
    type: String,
    require:true
   },
  author: {
    type: String, 
    require:true
   },
  publisher: String,
  publishedDate:{
    type: Number,
   
  },
  
 purcheseDate:{
  type: String,
  
 },
 description: String,
 pageCount: Number,
 printType: String,
  category: String,
  rating: Number,
  maturityRating: String,
  photo: {
    type: String,
    default: 'no-photo.jpg'
  },
  language: [String, 'English'],
  // user: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  shelf:{
    type: String,
    enum:['read', 'Currently reading', 'not read', 'none'],
    require: true,
    default: 'none'
  },
  isBorrowed:{
    type: Boolean,
    default: false,
    require: true
  },
  borrowedBy: String,
  retureDAte:{
    type: Date,
    msg: 'Given on trust and for knowledge seek',
    default: Date.now()
  }

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;

