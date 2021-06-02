const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const books = require('./routes/api/books');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 5000;

const app = express();

//Bodyparser middleware
app.use(bodyParser.json());

//Use routes
app.use('/api/books', books);

mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server started on port ${port}`));
