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
        //body: JSON.stringify(plan), - TODO - Send something to front-end to display (Mike)
        message: 'Success'
      })
    }
  })
})

router.post('/createSubscriptionPlan', (req, res, next) => {
  const token = req.body.stripeToken // Using Express
  const amount = req.body.amount
  const interval = req.body.interval

  stripe.plans.create({
    amount,
    interval,
    product: {
      name: "Wags Special"
    },
    currency: "usd",
  }, (err, plan) => {
    if (err) {
      res.send({
        success: false,
        message: 'Error'
      })
    } else {
      res.send({
        success: true,
        //body: JSON.stringify(plan), - TODO - Send something to front-end to display (Mike)
        message: 'Success'
      })
    }
  })
})

module.exports = router
