var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	var file = fs.createReadStream('index.html');
	file.on('open', function() {
		file.pipe(response);
	});
	file.on('error', function(err) {
		console.log(err);
	});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
