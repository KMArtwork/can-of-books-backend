'use strict';

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const Book = require('./models/book');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.DATABASE_URL);

app.get('/books', (request, response) => {

  Book
    .find()
    .then(res => {
      console.log('found books');
      response.send(res);
    })
    .catch(err => {
      console.log('error querying database');
      response.status(500).send(err);
    })
})

app.post('/books', (request, response) => {

  // console.log(request.body.title);

  Book
    .create(request.body)
    .then(res => {
      console.log(res);
      response.status(204).send(res);
    })
    .catch(err => response.status(500).send(`${Err} | 'Error creating book and adding to database`))
})

app.listen(PORT, () => console.log(`listening on ${PORT}`));