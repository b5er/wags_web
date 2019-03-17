const express = require('express')
const router = express.Router()


router.use('/appointments', require('./appointments'))
router.use('/donations', require('./donations'))
router.use('/pets', require('./pets'))
router.use('/user', require('./user'))

module.exports = router
