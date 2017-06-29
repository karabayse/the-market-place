var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var index = require('./modules/routes/index');


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/', index);

var port = process.env.PORT || 4000;

app.listen(port, function(){
  console.log('up on port:', port);
});
