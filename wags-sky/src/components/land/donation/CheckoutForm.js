import React, { Component } from 'react'
import StripeCheckout from 'react-stripe-checkout'


class CheckoutForm extends Component {

  submit = async token => {
    console.log(this.props.amount, typeof this.props.amount)
    try {
      const charge = await fetch('http://localhost:8000/api/donation/charge', {
                                  method: 'POST',
                                  headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json'
                                  },
                                  body: JSON.stringify({
                                          stripeToken: token.id,
                                          amount: parseInt(this.props.amount * 100, 10)
                                        })
                                })
      if(!charge.ok)
        console.error('Was not able to charge account.') // TODO: (Brian) animate form, to let user know.
      console.log(await charge.json())
    } catch(e) {
      console.log(e)
    }
  }

  render() {

    const { amount } = this.props

    return (
      <StripeCheckout
          token={ this.submit }
          amount={ parseInt(amount * 100, 10) }
          stripeKey="" // TODO: Mike will put public test key here.
        >
          <button
            disabled={ !amount }
            className="button is-rounded is-fullwidth is-medium light-shadow is-green"
            style={{ borderColor: '#61e786' }}
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
