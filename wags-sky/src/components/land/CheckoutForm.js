import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {Elements, StripeProvider} from 'react-stripe-elements'

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit = (token) => {
    console.log('submit', token)
    console.log('amount', this.props.amount)
    fetch("http://localhost:8000/api/donation/charge", {
      method: "POST",
      headers: {Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({stripeToken: token.id, chargeAmount: parseInt(this.props.amount * 100).toString()})
    }).then(res => res.json())
    .then(json => {
      console.log('json')
      console.log(json)
    })
  }

  render() {
    return (
      <StripeCheckout
          token={this.submit}
          amount={ parseInt(this.props.amount * 100)}
          stripeKey="pk_test_33bnQoqpY5kIRpNDBZRq0Rx9">
          <button disabled={this.props.amount <= 0} className="button is-rounded is-fullwidth is-medium light-shadow is-green" style={{ borderColor: '#61e786' }}>
            <h1 className="has-text-pineapple">
              <strong>Donate</strong>
            </h1>
          </button>
      </StripeCheckout>
    );
  }
}
