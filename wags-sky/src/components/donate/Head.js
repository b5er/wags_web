import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CHECKOUT, UPDATE_CHECKOUT } from '../../graphql/donate'

// Utils
import { getStorageItem } from '../../utils/storage'


class Head extends Component {

  async componentDidMount() {
    const updatedAmount = getStorageItem('amount') ? `${getStorageItem('amount')}`:''
    try {
      await this.props.updateCheckout({ variables: { ...this.props.getCheckout.checkout, amount: updatedAmount } })
    } catch(e) {
      console.log(e)
    }
  }

  render() {

    const { getCheckout: { checkout } } = this.props

    return (
      <div className="hero-head">
        <h1 className="title has-text-centered">
          $ {checkout.amount}
        </h1>
      </div>
    )
  }
}

export default compose(
  graphql(GET_CHECKOUT, { name: 'getCheckout' }),
  graphql(UPDATE_CHECKOUT, { name: 'updateCheckout' })
)(Head)
