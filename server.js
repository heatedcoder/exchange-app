var express = require('express');
var app = express();
var path = require('path');
var routes = require('./api/routes');

app.use('/', express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('server is listening at port: '+ port);
});

// Add middleware to console log every request
app.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
  });

app.use('/api', routes);