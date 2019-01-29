const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.status(200).json({
    message: "this route works"
  });
});

router.post('/',(req,res,next)=>{
  res.status(200).json({
    message: "you tried to post"
  });
});

module.exports = router;
