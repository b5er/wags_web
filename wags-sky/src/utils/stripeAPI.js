export const charge = (token, amount, interval) => {
  if (interval === 'Once') {
    return chargeOnce(token, amount)
  } else if (interval === 'Monthly') {
    return chargeMonthly(token, amount)
  }
}

const chargeOnce = async (token, amount) => {
  try {
    const charge = await fetch('http://localhost:8000/api/donation/charge', {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ stripeToken: token.id, amount })
                              })
    if (!charge.ok)
      console.log('Unable to charge account Once.')
    return charge.json()
  } catch(e) {
    console.log(e)
  }
}

const chargeMonthly = async (token, amount) => {
  try {
    const subscription = await fetch('http://localhost:8000/api/donation/createSubscriptionPlan', {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                        stripeToken: token.id,
                                        amount
                                })
                        })
    if(!subscription.ok)
      console.error('Unable to charge account Monthly.')
    return subscription.json()
  } catch(e) {
    console.log(e)
  }
}
