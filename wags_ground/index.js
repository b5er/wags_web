const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const errorHandler = require('errorhandler')
//const config = require('../config/config')

// Configure mongoose's promise to global promise
mongoose.promise = global.Promise

//Process is a global variable that should exist, else it will just choose port 8000
const isProduction = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 8000

const app = express()

app.use(cors())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`);
	next();
});

//Tell express to use MiddleWare
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'passport-tutorial', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }))

if(!isProduction)
	app.use(errorHandler())

// Models & Routes
require('./models/wags_model')
//require('./config/passport')
app.use(require('./routes'))

if(!isProduction) {
	app.use(function (err, req, res, next) {
		console.log(err.message)
		if(!err.statusCode)
			err.statusCode = 500
		res.status(err.statusCode).send(err.message)

		res.json({
			errors: {
				message: err.message,
				error: err
			}
		})
	})
}

app.listen(PORT, () => console.log(`Serving @ http://localhost:${PORT}/`))
