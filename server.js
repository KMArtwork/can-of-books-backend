'use strict';

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Book = require('./models/book');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DATABASE_URL);

app.get('/books', async (request, response) => {

  // axios
  //   .get(process.env.DATABASE_URL)

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));
