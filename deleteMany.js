const mongoose = require('mongoose');
const Book = require('./models/book');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL);

massdelete = async() => {
  await Book.deleteMany({title: null})
}

massdelete();