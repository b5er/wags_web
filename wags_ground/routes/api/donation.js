const express = require('express')
const { stripeSK } = require('../../config/dev')
const stripe = require('stripe')(stripeSK)
const router = express.Router()


router.post('/charge', (req, res, next) => {
  const token = req.body.stripeToken // Using Express
  const amount = !isNaN(req.body.amount) ? (parseInt(req.body.amount) * 100):0

  stripe.charges.create({
    amount,
    currency: 'usd',
    description: 'Wags - Greenbelt',
    source: token
  }, (err, charge) => {
    if (err) {
      res.send({
        success: false,
        message: err.message
      })
    } else {
      res.send({
        success: true,
        message: charge
      })
    }
  })
})

router.post('/createSubscriptionPlan', (req, res, next) => {
  const token = req.body.stripeToken // Using Express
  const amount = !isNaN(req.body.amount) ? (parseInt(req.body.amount) * 100):0

  stripe.plans.create({
    amount,
    interval: 'month',
    product: {
      name: 'Wags - Monthly Donation'
    },
    currency: "usd",
  }, (err, plan) => {
    if (err) {
      res.send({
        success: false,
        message: err.message
      })
    } else {
      res.send({
        success: true,
        message: plan
      })
    }
  })
})

module.exports = router
