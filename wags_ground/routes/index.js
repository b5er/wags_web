const express = require('express');
var router = express.Router();

router.use('/api', require('./api'));
console.log('Hello from the ground bro!')

module.exports = router;
