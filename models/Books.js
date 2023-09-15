const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  category: {
      String, 
     enum: ["read", "unread", "currently reading"]
  }  
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
