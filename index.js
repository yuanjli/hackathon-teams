// The back end Script;
// Implement the views/forms/buttons needed for PUT and DELETE;

// Declare Variables; 
var express = require('express');
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var app = express();

// Adding the middleware here; 
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);
app.use(express.static(__dirname + '/public'));

//adding the url for teams 
app.use('/teams', require('./controllers/teams'));

// Get the home page for it to start: 
app.get('/', function(req, res) {
  res.render('index');
});


app.listen(3000);
