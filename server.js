// server.js

// Generate a new instance of express server.
var express = require('express'),
    http    = require('http');
var app     = express();

/*
* Default PORT: 9250 and Host: 127.0.0.1
* */
var port = process.env.PORT || 9250;
var host = process.env.HOST || "127.0.0.1";

// Starts the server itself
var server = http.createServer(app).listen(port, host, function() {
    console.log("Nodejs Server listening to %s:%d within %s environment",
        host, port, app.get('env'));
});


//Configurations
app.configure(function() {
    app.set('views', __dirname + '/public');
    app.engine('.html', require('jade').__express);
});

// At the root of your website, we show the index.html page
app.get('/', function(req, res) {
    res.sendfile('./public/index.html')
});