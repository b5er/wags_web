const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_SK)
const mongoose = require('mongoose')
const Donor = require('../../models/donor')
const Subscription = require('../../models/subscription')
const router = express.Router()


if (process.env.NODE_ENV !== 'production')
  require('dotenv').load()

router.get('/', async (req, res) => {
  try {
    const donors = await Donor.find().select('_id name amount createdAt')
    res.send(donors)
  } catch(e) {
    res.status(500).json(e)
  }
})

router.post('/charge', async (req, res, next) => {
  const { stripeToken, email } = req.body
  const amount = !isNaN(req.body.amount) ? (parseInt(req.body.amount) * 100):0

  try {

    const donor = await Donor.find({ email })
    if (donor.length > 0)
      return res.status(500).send({ message: 'You already have a subscription!' })

    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      description: 'Wags - Greenbelt',
      source: stripeToken,
      receipt_email: email
    })

    res.send({ message: charge })
  } catch(e) {
    res.status(500).send({ message: e.message })
  }

})

router.post('/createSubscriptionPlan', async (req, res, next) => {
  const { stripeToken, name, email } = req.body
  const phone = !isNaN(req.body.phone) ? parseInt(req.body.phone):-1
  const amount = !isNaN(req.body.amount) ? (parseInt(req.body.amount) * 100):0

  try {

    const donor = await Donor.find({ email })
    if (donor.length > 0)
      return res.status(500).send({ message: 'You already have a subscription!' })

    const findSubscription = await Subscription.find({ amount })
    let planId = ''
    if (findSubscription.length > 0) {
      planId = findSubscription[0].planId
    } else {
      const plan = await stripe.plans.create({
        product: process.env.PRODUCT_ID,
        currency: 'usd',
        interval: 'month',
        amount
      })

      planId = plan.id

      const model = new Subscription({
        _id: new mongoose.Types.ObjectId(),
        amount,
        planId
      })

      const doc = await model.save()
      if(!doc || doc.length === 0)
        return res.status(500).send({ sub: doc, planId })
    }


    const customer = await stripe.customers.create({
      email,
      source: stripeToken
    })

    const model = new Donor({
      _id: new mongoose.Types.ObjectId(),
      name,
      email,
      phone,
      amount,
      stripeID: customer.id
    })

    const doc = await model.save()
    if(!doc || doc.length === 0)
      return res.status(500).send(doc)


    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ plan: planId }]
    })

    const invoice = await stripe.invoices.retrieve(subscription.latest_invoice)

    res.send({ message: invoice })
  } catch(e) {
    res.status(500).send(e)
  }

})

module.exports = router
