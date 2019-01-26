const express = require('express')
const router = express.Router()

router.use('/pet', require('./pet'))
router.use('/donation', require('./donation'))
router.use('/sign_up',require('./sign_up'))
module.exports = router
