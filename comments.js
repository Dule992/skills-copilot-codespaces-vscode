// Create web server
var express = require('express');
var app = express();
var port = 3000;
// Create web server
app.get('/', function(req, res) {
    res.send('Hello world');
});
app.listen(port, function() {
    console.log('Server is listening on port ' + port);
});