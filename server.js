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


// var axios = require('axios');
// var data = JSON.stringify({
//     "collection": "books",
//     "database": "books-db",
//     "dataSource": "Cluster0",
//     "projection": {
//         "_id": 1
//     }
// });
            
// var config = {
//     method: 'post',
//     url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-jwyeh/endpoint/data/v1/action/find',
//     headers: {
//       'Content-Type': 'application/json',
//       'Access-Control-Request-Headers': '*',
//       'api-key': 'SrFraR6JIQ9NgJG8l0NyUcYsdwqcGpDAZiR8VUPn1wYzbie4dffpM9jsW20wVoM1',
//     },
//     data: data
// };
            
// axios(config)
//     .then(function (response) {
//         console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
