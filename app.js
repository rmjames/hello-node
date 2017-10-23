const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send('Hey World!!')
	})

app.listen(3000, (err) => {
	if(err) {
		return console.log('something happened',err)
	}
	console.log('Server Listening on 3000')
})
