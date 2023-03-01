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

// CREATE
app.post('/books', (request, response) => {

  console.log('post request received from client');

  if (!request.body.title || !request.body.description) {
    console.log('request missing information');
    response.status(40).send('Error | Request is not sending the proper information to the server')
  } else {
      Book
        .create(request.body)
        .then(res => {
          console.log('book successfully created, adding to database');
          response.status(202).send(res);
        })
        .catch(err => response.status(500).send(`${err} | 'Error creating book and adding to database`))
  }


})

// READ
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

//UPDATE
app.put('/books/:id', (request, response) => {

  console.log('put request received from client')

  if (!request.body.title || !request.body.description) {
    console.log('Error updating database | invalid form entry')
    response.status(404).send('Error | You need to supply an updated title and description')
  } else {
      Book
      .findByIdAndUpdate(request.params.id, request.body, {new: true})
      .then(res => {
        console.log('Successfully updated book');
        response.status(202).send(res);
      })
      .catch(err => {
        console.log('Error updating book');
        response.status(404).send(`${err} | Unable to update database`);
      })
  }
})


// DELETE
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