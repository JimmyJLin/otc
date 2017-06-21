const express = require('express');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.get('/*', (req, res) => {
  res.render('pages/404');
});

module.exports = main;
