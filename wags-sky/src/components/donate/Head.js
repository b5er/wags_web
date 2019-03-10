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

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  render() {

    const { getCheckout: { checkout } } = this.props

    return (
      <div className="hero-head">
        <div className="section is-padding-bottomless">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-5">
                <div className="card light-shadow is-small-rounded is-pineapple">
                  <h1 className="head-title has-text-centered has-text-isabelline">
                    $ {this.numberWithCommas(checkout.amount)}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default compose(
  graphql(GET_CHECKOUT, { name: 'getCheckout' }),
  graphql(UPDATE_CHECKOUT, { name: 'updateCheckout' })
)(Head)
