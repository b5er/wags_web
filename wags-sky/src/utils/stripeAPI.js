export const charge = (token, amount, interval, checkout) => {
  const { name, email, phone } = checkout
  if (interval === 'Once') {
    return chargeOnce(token, amount, email)
  } else if (interval === 'Monthly') {
    return chargeMonthly(token, amount, name, email, phone)
  }

  return { stripeError: 'Invalid interval.' }
}

const chargeOnce = async (token, amount, email) => {
  try {
    const charge = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/donations/charge`, {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ stripeToken: token.id, amount, email })
                              })
    if (!charge.ok) {
      const { message } = await charge.json()
      return { stripeError: message }
    }

    return charge.json()
  } catch(e) {
    console.log(e)
  }
}

const chargeMonthly = async (token, amount, name, email, phone) => {
  try {
    const subscription = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/donations/createSubscriptionPlan`, {
                                method: 'POST',
                                headers: {
                                  'Accept': 'application/json',
                                  'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ stripeToken: token.id, amount, name, email, phone })
                              })
    if(!subscription.ok) {
      const { message } = await subscription.json()
      return { stripeError: message }
    }
    return subscription.json()
  } catch(e) {
    console.log(e)
  }
}
