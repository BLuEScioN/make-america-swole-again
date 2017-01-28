var express = require('express');
var db = require('./db.js'); // connection to db through knex

// Decide if these modules are necessary
// var path = require('path');
var passport = require('passport');
//var bodyParser = require('body-parser');
var morgan = require('morgan');

var app = express(); // Creates an Express application. The express() function is a top-level function exported by the express module.

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express); // What do these shiny buttons do?
require('./config/routes.js')(app, express);

var port = process.env.PORT || 8080; // what exactly is process.env.PORT doing

app.listen(port, function () {
  console.log('MASA is listening on port:', port)
})

module.exports = app;

// // start listening to requests on port 8000
// app.listen(8000);

// // export our app for testing and flexibility, required by index.js
// module.exports = app;

