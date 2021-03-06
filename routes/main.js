const express = require('express');
const data = require('../app/data/data.json');
const register = require('../app/register/register');

const main = express.Router();

/* api routes */
main.get('/', (req, res) => {
  res.render('pages/index');
});

main.route('/register')
  .get((req, res) => {
    res.render('pages/register');
  });
main.route('/register/error')
  .get((req, res) => {
    res.render('pages/registration_error');
  });
main.route('/register/confirmation')
  .get((req, res) => {
    res.render('pages/registration_confirmation');
  });

main.route('/post/register')
  .post(register.seminarRegistrationForm, (req, res) => {
  });

main.get('/faq', (req, res) => {
  res.render('pages/faq', { data });
  // console.log('data', data);
});

main.get('/contact', (req, res) => {
  res.render('pages/contact');
});

module.exports = main;
