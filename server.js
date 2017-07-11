// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const MongoClient = require("mongodb").MongoClient;

// Get our API routes
const api = require('./server/routes/api');

const app = express();
var db;

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Connect to database
MongoClient.connect("mongodb://localhost/database")
	.then(function (database) {
		db = database;

		db.collection("user").find().toArray()
			.then(function (results) {
				results.forEach(function (obj) {
					console.log("ID : " + obj._id.toString() + " Name : " + obj.login + " Password : " + obj.password);
				});
			})
			.catch(function (error) {
				console.log(error);
			})
	})
	.catch(function (error) {
		console.log(error);
	})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));