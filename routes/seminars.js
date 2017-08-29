const express = require('express');
const data = require('../app/data/data.json');

const seminarRoutes = express.Router();


/* api routes */
seminarRoutes.get('/', (req, res) => {
  res.render('pages/seminars/seminars', { data });
});

seminarRoutes.get('/hair_strokes', (req, res) => {
  res.render('pages/seminars/hair_strokes', { data });
});

seminarRoutes.get('/powdered', (req, res) => {
  res.render('pages/seminars/powdered', { data });
});

seminarRoutes.get('/lips', (req, res) => {
  res.render('pages/seminars/lips', { data });
});

seminarRoutes.get('/eyeliners', (req, res) => {
  res.render('pages/seminars/eyeliners', { data });
});

seminarRoutes.get('/areola', (req, res) => {
  res.render('pages/seminars/areola', { data });
});

seminarRoutes.get('/hairlines', (req, res) => {
  res.render('pages/seminars/hairlines', { data });
});

seminarRoutes.get('/others', (req, res) => {
  res.render('pages/seminars/others', { data });
});

module.exports = seminarRoutes;
