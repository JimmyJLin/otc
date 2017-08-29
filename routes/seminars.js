const express = require('express');
const data = require('../app/data/data.json');

const seminarRoutes = express.Router();


/* api routes */
seminarRoutes.get('/', (req, res) => {
  res.render('pages/seminars/seminars', { data: data });
});

seminarRoutes.get('/hair_strokes', (req, res) => {
  res.render('pages/seminars/hair_strokes');
});

seminarRoutes.get('/powdered', (req, res) => {
  res.render('pages/seminars/powdered');
});

seminarRoutes.get('/lips', (req, res) => {
  res.render('pages/seminars/lips');
});

seminarRoutes.get('/eyeliners', (req, res) => {
  res.render('pages/seminars/eyeliners');
});

seminarRoutes.get('/areola', (req, res) => {
  res.render('pages/seminars/areola');
});

seminarRoutes.get('/hairlines', (req, res) => {
  res.render('pages/seminars/hairlines');
});

seminarRoutes.get('/others', (req, res) => {
  res.render('pages/seminars/others');
});

module.exports = seminarRoutes;
