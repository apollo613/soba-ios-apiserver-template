var express = require('express'),
    path = require('path'),
    http = require('http'),
    mongoose = require('mongoose'),
    routes = require('./routes/routes.js');

// start database:
// ulimit -n 2048 && mongod --dbpath db &

// start server:
// node index.js

// set up the db

mongoose.connect('mongodb://localhost/blog');
var db = mongoose.connection;

db.on('error', function(msg) {
  console.log('Mongoose connection error %s', msg);
});

db.once('open', function() {
  console.log('Mongoose connection established');
});

// in case the above does not work:
/*
mongoose.connect('mongodb://localhost/blog', function(server, err) {
  if (err) {
    conosole.log('error starting db', err);
  } else {
    console.log('connected to db');
  }
});
*/

// set up the app

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));  /* 'default', 'short', 'tiny', 'dev' */
app.use(express.json());
app.use(express.urlencoded());

app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

routes.init(app);

http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
});