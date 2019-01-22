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

router.post('/createSubscriptionPlan', (req, res, next) => {
  console.log(req.body)
  const token = req.body.stripeToken // Using Express
  const amount = req.body.amount
  const interval = 'day'

  console.log(amount)
  console.log(interval)

  stripe.plans.create({
    amount,
    interval,
    product: {
      name: "Wags Special"
    },
    currency: "usd",
  }, (err, plan) => {
    console.log(plan)
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
    }
  })
})

module.exports = router
