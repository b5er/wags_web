const express = require('express');
var router = express.Router();

router.use('/pet_pictures', require('./image_fetch'));
router.use('/petQuery', require('./petQueries'));
router.use('/donation', require('./donate'));

module.exports = router;
