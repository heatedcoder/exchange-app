var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');

app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.listen(3000, 'localhost', function() {
    console.log('server is listening');
});

// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
  });

app.use('/api', routes);