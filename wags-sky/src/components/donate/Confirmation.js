import React, { Component } from 'react'

// Components
import CheckoutDog from './CheckoutDog'


class Confirmation extends Component {
  render() {
    return (
      <div className="section is-paddingless">
        <CheckoutDog />
        <div className="confirmation-message">
          <h1 className="title is-size-4">
            Your payment was completed!
          </h1>
        </div>
      </div>
    )
  }
}

export default Confirmation
