const express = require('express')
const router = express.Router()

router.use('/pet', require('./pet'))
router.use('/donation', require('./donation'))

module.exports = router
