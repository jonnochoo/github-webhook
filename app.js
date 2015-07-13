var express = require('express');
var path = require('path');
var routes = require('./routes/index');
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080;

var app = express();
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(routes);

app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});
