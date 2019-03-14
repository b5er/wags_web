const express = require('express')
const stripe = require('stripe')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')


const isProduction = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 8000
const app = express()

if (!isProduction)
	require('dotenv').load()

mongoose.connect(
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB}`,
	{ useNewUrlParser: true }
)
mongoose.set('useCreateIndex', true)
mongoose.promise = global.Promise

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
	console.log(`${(new Date()).toLocaleString('en-US')} => ${req.originalUrl}`)
	next()
})

const corsOptions = {
	'origin': '*',
	'methods': 'HEAD, GET, POST, PATCH, DELETE',
	'optionSuccessStatus': 204
}

app.use(cors(corsOptions))

app.use(require('./routes'))

if (!isProduction) {
	app.use((req, res, next) => {
		const error = new Error('Endpoint not found.')
		error.status = 404
		next(error)
	})

	app.use((error, req, res, next) => {
		res.status(error.status || 500).send({
			message: error.message
		})
	})
}

app.listen(PORT, () => console.log(`Serving @ http://localhost:${PORT}/`))
