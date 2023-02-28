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

  console.log('get request received from client')

  Book
    .find()
    .then(res => {
      console.log('found books in database');
      response.send(res);
    })
    .catch(err => {
      console.log('error querying database');
      response.status(500).send(err);
    })
})

app.post('/books', (request, response) => {

  console.log('post request received from client');

  Book
    .create(request.body)
    .then(res => {
      console.log('book successfully created, adding to database');
      response.status(202).send(res);
    })
    .catch(err => response.status(500).send(`${Err} | 'Error creating book and adding to database`))
})

app.delete('/books/:id', (request, response) => {

  console.log('delete request received from client')

  Book
    .findByIdAndDelete(request.params.id)
    .then(res => {
      console.log('book successfully deleted from database');
      response.status(204).send('book has been removed')
    })
    .catch(err => response.status(404).send('Unable to remove book | Book may not exist'))

})

app.listen(PORT, () => console.log(`listening on ${PORT}`));