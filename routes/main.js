const express = require('express');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.get('/seminars', (req, res) => {
  res.render('pages/seminars');
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

main.get('/*', (req, res) => {
  res.render('pages/404');
});

module.exports = main;
