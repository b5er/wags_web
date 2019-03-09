const express = require('express')
const stripe = require('stripe')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const mongoose = require('mongoose')
const errorHandler = require('errorhandler')

if (process.env.NODE_ENV !== 'production')
	require('dotenv').load()


mongoose.connect(
	`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_SERVER}/${process.env.DB}`,
	{ useNewUrlParser: true }
)
mongoose.set('useCreateIndex', true)
mongoose.promise = global.Promise


const isProduction = process.env.NODE_ENV === 'production'
const PORT = process.env.PORT || 8000
const app = express()

app.use(cors())
app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`)
	next()
})

app.use(express.static(path.join(__dirname, 'public')))

if (!isProduction)
	app.use(errorHandler())



require('./models/pet')
require('./models/user')
app.use(require('./routes'))

if (!isProduction) {
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
