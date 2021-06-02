const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  imgSrc: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  genre: {
    type: String,
    required: true,
  },

  series: {
    type: String,
  },

  lengthPages: {
    type: Number,
    required: true,
  },

  lengthWords: {
    type: Number,
    required: true,
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema);