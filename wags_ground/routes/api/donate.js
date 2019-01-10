const express = require('express');
const stripe = require('stripe')('sk_test_9khwZmlTyZutVLk7onfB7JvL');
const router = express.Router();

/**
* Adds a new message to objects
*/
router.post('/stripe', (req, res, next) => {
  const stripeToken = req.body.stripeToken;

  console.log('HELLO THERE');

  stripe.customers.create({
    email: "test.test@gmail.com",
    source: stripeToken
  }, function(err, customer) {
    console.log(err);
    console.log(customer);
    //Asynchronously called
    if (err) {
      res.send({
        success: false,
        message: 'Error'
      });
    } else {
      const {id} = customer;

      /*stripe.subscriptions.create({
        customer.id,
        items: [
          {
            plan: "wags"
          }
        ]
      }), function (err, subscription) {
        //Asynchronously called
        console.log(err);
        console.log(subscription);
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
      }*/

      stripe.charges.create({
        amount: 1000,
        currency: 'usd',
        description: 'Wags - Greenbelt',
        source: "tok_mastercard"
      }, function(err, charge) {
        //Asynchronously called
        console.log(err);
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
    }
  });
});

module.exports = router;
