const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const engine = require('ejs-mate');

/* app setting */
const port = process.env.PORT || 3000;
const app = express();
const server = app.listen(port);


/* express server setting  */
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('views', './views');
app.engine('ejs', engine);
app.set('view engine', 'ejs');

/* routes */
const mainRoutes = require('./routes/main');
const seminarRoutes = require('./routes/seminars');

app.use('/', mainRoutes);
app.use('/seminars', seminarRoutes);

app.get('/*', (req, res) => {
  res.render('pages/404');
});
