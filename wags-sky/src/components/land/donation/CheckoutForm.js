import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'

// Utils
import { setStorageItem } from '../../../utils/storage'


class CheckoutForm extends Component {

  submit = async token => {
    const { amount, interval } = this.props
    if (interval === 'once') {
      try {
        const charge = await fetch('http://localhost:8000/api/donation/charge', {
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
        if(!charge.ok)
          console.error('Was not able to charge account.') // TODO: (Brian) animate form, to let user know.
      } catch(e) {
        console.log(e)
      }
    } else {
      //Have to make a subscription plan if we are recurring
      try {
        const subscription = await fetch('http://localhost:8000/api/donation/createSubscriptionPlan', {
                                    method: 'POST',
                                    headers: {
                                      'Accept': 'application/json',
                                      'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify({
                                            stripeToken: token.id,
                                            amount,
                                            interval
                                    })
                            })
        if(!subscription.ok)
          console.error('Was not able to charge account.') // TODO: (Brian) animate form, to let user know.
      } catch(e) {
        // TODO: user-friendly animation or message.
        console.log(e)
      }
    }
  }

  render() {

    const { amount, interval } = this.props

    return (
      <StripeCheckout
        token={this.submit}
        amount={parseInt(amount * 10)}
        stripeKey="pk_test_TIPbVScZzYrE42xYFkhDxGsQ"
      >
        <button
          id="checkout-button"
          disabled={!amount}
          className="button is-rounded is-fullwidth is-medium light-shadow is-green"
          onClick={e => {
            setStorageItem('amount', amount)
            setStorageItem('interval', interval)
          }}
        >
          <h1 className="has-text-pineapple">
            <strong>Donate</strong>
          </h1>
        </button>
      </StripeCheckout>
    )
  }
}

export default CheckoutForm
