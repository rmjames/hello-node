const express = require('express');
const app = express();

// app.use((req,res, next) => {
// 	console.log(req.headers)
// 	next()
// })

// app.use((req,res, next) => {
// 	req.chance = Math.random()
// 	next()
// })

// app.use((err,req,res, next) => {
// 	console.log(err)
// 	res.status(500).send('something happended')
// })

app.get('/', (req,res) => {
	res.send('Hey World!!')
	})

app.listen(3000, (err) => {
	if(err) {
		return console.log('something happened',err)
	}
	console.log('Server Listening on 3000')
})




// const express = require('express')
// const app = express()


// app.get('/', (req,res) => {
// 	throw new Error('my bad')
// })

// app.use((err,req,res, next) => {
// 	console.log(err)
// 	res.status(500).send('something happended')
// })

// app.listen(3000, (err) => {
// 	if(err) {
// 		return console.log('something happened',err)
// 	}
// 	console.log('Server Listening on 3000')
// })
