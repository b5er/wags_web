const express = require('express');
const router = express.Router();

router.get('/sign_up',(req,res,next)=>{
  res.status(200).json({
    message: "this route works"
  });
});
