import React, { Component } from 'react'

// Components
import CheckoutDog from './CheckoutDog'


class Confirmation extends Component {
  render() {
    return (
      <div className="section is-paddingless">
        <CheckoutDog />
        <div className="confirmation-message">
          <h1 className="title is-size-4 has-text-davy-grey">
            Your payment is complete!
          </h1>
        </div>
      </div>
    )
  }
}

export default Confirmation
