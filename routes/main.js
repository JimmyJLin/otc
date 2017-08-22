const express = require('express');
const data = require('../app/data/data.json');

const main = express.Router();


/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.get('/register', (req, res) => {
  res.render('pages/register');
});

main.get('/faq', (req, res) => {
  res.render('pages/faq', { data: data });
  console.log('data', data);
});

main.get('/contact', (req, res) => {
  res.render('pages/contact');
});

module.exports = main;
