const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const path = require('path');


// const postsRoutes = require('../routes/posts');
const userRoutes = require('./routes/users');


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS");
  next();
});


app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

// app.use('/api/posts', postsRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;