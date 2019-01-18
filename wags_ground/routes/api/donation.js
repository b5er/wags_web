const express = require('express')
const { stripeSK } = require('../../config/dev')
const stripe = require('stripe')(stripeSK)
const router = express.Router()


router.post('/charge', (req, res, next) => {
  const token = req.body.stripeToken // Using Express
  const amount = req.body.amount

  stripe.charges.create({
    amount,
    currency: 'usd',
    description: 'Wags - Greenbelt',
    source: token
  }, (err, charge) => {
    if (err) {
      res.send({
        success: false,
        message: 'Error'
      })
    } else {
      res.send({
        success: true,
        message: 'Success'
      })

      // TODO: going to do something with charge soon.
    }
  })
})

module.exports = router
