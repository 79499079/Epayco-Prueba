const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Initializations
const app = express();


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');


//middlewares
app.use(express.urlencoded({extended: false}));//permite entender datos recibidos
app.use(express.json());//recibe datos json 

// routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/users.routes'));

// static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;