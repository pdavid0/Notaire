'use strict';

var express = require('express');

var app = express();

app.set('title', 'Notaire - Accueil');

app.use(express.static(__dirname + '/app/public'));
app.use('/images', express.static(__dirname + '/app/public/images'));
app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.sendfile('app/404.html');
	// res.send(500, 'Something broke!');
	next(err);
});
app.use(express.logger());
app.get('/', function(request, response) {
	response.sendfile('app/intro.html');
});

app.get('/contact', function(request, res) {
	res.sendfile('app/contact.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log('Listening on ' + port);
});