var express = require('express');
var app = express();
var path = require('path');

//set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

//set up one route to load index.html
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.listen(8080);
console.log("Magic a happenin on port 8080");
