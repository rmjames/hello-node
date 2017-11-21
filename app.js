'use strict';

const config = require('./config.js'),
	express = require('express'),
 	port = config.PORT,
 	app = express();

app.use(express.static(__dirname +  '/view'));

app.get('/', (req,res) => {
	res.sendFile('index.html')
})

app.listen(port, (err) => {
	if(err) {
		return console.log('something happened', err)
	}
	console.log(`Server Listening on ${port}`);
})

module.exports = app;
