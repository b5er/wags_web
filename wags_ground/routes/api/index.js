const express = require('express')
const router = express.Router()


router.use('/donations', require('./donations'))
router.use('/pets', require('./pets'))
router.use('/signup',require('./signup'))
router.use('/user', require('./user'))

module.exports = router
