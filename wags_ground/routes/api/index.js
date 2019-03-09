const express = require('express')
const router = express.Router()


router.use('/donation', require('./donation'))
router.use('/pet', require('./pet'))
router.use('/signup',require('./signup'))
router.use('/user', require('./user'))

module.exports = router
