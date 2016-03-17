'use strict';

var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Hey World!!');
});

app.listen(5000);
