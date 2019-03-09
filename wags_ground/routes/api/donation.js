const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SK)
const router = express.Router()


router.post('/charge', async (req, res, next) => {
  const { stripeToken, email } = req.body
  const amount = !isNaN(req.body.amount) ? (parseInt(req.body.amount) * 100):0

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      description: 'Wags - Greenbelt',
      source: stripeToken,
      receipt_email: email
    })
    res.send({ success: true, message: charge })
  } catch(e) {
    res.send({ success: false, message: e.message })
  }

})

router.post('/createSubscriptionPlan', async (req, res, next) => {
  const { stripeToken, email } = req.body
  const amount = !isNaN(req.body.amount) ? (parseInt(req.body.amount) * 100):0

  try {
    const product = await stripe.products.create({
      name: 'Wags - Monthly Donation',
      type: 'service'
    })

    // add pricing plan id: 'plan_csfdaf....' and AMOUNT (unique part) to db
    // to check if we already have such plan already. If so, attach that plan to customer
    const plan = await stripe.plans.create({
      product: product.id,
      currency: 'usd',
      interval: 'month',
      amount
    })

    // Add customer in db. Check if user is already in system. Stripe doesn't check.
    // Once you create the customer, store the id value in your own database
    // for later reference (presumably with the customer’s email address).
    const customer = await stripe.customers.create({
      email,
      source: stripeToken
    })

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: plan.id }]
    })

    res.send({ success: true, message: subscription })
  } catch(e) {
    res.send({ success: false, message: e })
  }

})

module.exports = router
