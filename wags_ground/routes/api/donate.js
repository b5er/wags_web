const express = require('express');
const stripe = require('stripe')('sk_test_9khwZmlTyZutVLk7onfB7JvL');
const router = express.Router();

/**
* Adds a new message to objects
*/
router.post('/charge', (req, res, next) => {
  const token = req.body.stripeToken // Using Express
  const chargeAmount = req.body.chargeAmount

  console.log(req.body)

  stripe.charges.create({
    amount: chargeAmount.toString(),
    currency: 'usd',
    description: 'Wags - Greenbelt',
    source: token
  }, function(err, charge) {
    //Asynchronously called
    console.log('charge');
    console.log(charge);
    if (err) {
      res.send({
        success: false,
        message: 'Error'
      });
    } else {
      res.send({
        success: true,
        message: 'Success'
      });
    }
  });
});

module.exports = router;
