const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();


const livroRoute = require('./routes/livro');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/livro', livroRoute);
module.exports = app;


router.get('/', (req, res, next) => {
    res.status(200).send({
      title: 'MentionsAPI',
      version: '1.0.0'
    });
  });