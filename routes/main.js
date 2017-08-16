const express = require('express');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.get('/register', (req, res) => {
  res.render('pages/register');
});

main.get('/faq', (req, res) => {
  res.render('pages/faq');
});

main.get('/contact', (req, res) => {
  res.render('pages/contact');
});

module.exports = main;
