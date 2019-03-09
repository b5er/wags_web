import React, { Component } from 'react'

// Components
import Head from './Head'
import Information from './Information'
import Payment from './Payment'
import Confirmation from './Confirmation'
import Foot from './Foot'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CHECKOUT } from '../../graphql/donate'

// Stripe
import { Elements, StripeProvider } from 'react-stripe-elements'


class Donate extends Component {

  constructor() {
    super()
    this.state = {
      active: 'info',
      step: 0,
      infoSubmit: false,
      paySubmit: false
    }
  }

  render() {

    const { active, step, infoSubmit, paySubmit } = this.state
    const { getCheckout: { checkout } } = this.props

    return (
      <StripeProvider apiKey="pk_test_6BSbyhfEtRHnrjHDiZMlzb1q">
        <section className="hero is-fullheight is-blue">
          <Head />
  				<div className="hero-body">
            <div className="container">
    					<div className="columns is-centered">
                <div className="column is-6">
                  <ul className="steps is-medium">
                    <li className={`step-item ${active === 'info' ? 'is-active':''} ${step >= 0 ? 'is-completed':''}`}>
                      <div className="step-marker">
                        <span className="icon">
                          <i className="fa fa-user has-text-isabelline" />
                        </span>
                      </div>
                      <div className="step-details">
                        <p className="step-title is-size-5">
                          Information
                        </p>
                      </div>
                    </li>
                    <li className={`step-item ${active === 'pay' ? 'is-active':''} ${step >= 1 ? 'is-completed':''}`}>
                      <div className="step-marker">
                        <span className="icon">
                          <i className="fas fa-dollar-sign has-text-isabelline" />
                        </span>
                      </div>
                      <div className="step-details">
                        <p className="step-title is-size-5">
                          Payment
                        </p>
                      </div>
                    </li>
                    <li className={`step-item ${active === 'confirm' ? 'is-active':''} ${step === 2 ? 'is-completed':''}`}>
                      <div className="step-marker">
                        <span className="icon">
                          <i className="fa fa-check has-text-isabelline" />
                        </span>
                      </div>
                      <div className="step-details">
                        <p className="step-title is-size-5">
                          Confirmation
                        </p>
                      </div>
                    </li>
                    <div className="steps-content">
                      <div className="columns is-centered">
                        <div className="column is-6">
                          <div className={`step-content ${active === 'info' ? 'is-active':''}`}>
                            <Information submit={infoSubmit} />
                          </div>
                          <div className={`step-content ${active === 'pay' ? 'is-active':''}`}>
                            <Elements>
                              <Payment submit={paySubmit} />
                            </Elements>
                          </div>
                          <div className={`step-content ${active === 'confirm' ? 'is-active':''}`}>
                            <Confirmation />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="steps-actions">
                      {
                        active === 'pay' ?
                          (<div className="steps-action">
                            <span
                              className="button is-light"
                              onClick={e => {
                                this.setState({ active: 'info', step: 0 })
                              }}
                            >
                              Previous
                            </span>
                          </div>)
                          :
                          null
                      }
                      {
                        active === 'confirm' ?
                          (<div className="steps-action">
                            <span
                              className="button receipt-button"

                            >
                              Receipt
                            </span>
                          </div>)
                          :
                          (<div className="steps-action">
                            <span
                              id="complete-button"
                              className="button is-light"
                              onClick={e => {
                                switch(active) {
                                  case 'pay':
                                    if (checkout.complete) {
                                      this.setState({ active: 'confirm', step: 2, paySubmit: true })
                                    } else {
                                      this.setState({ paySubmit: true })
                                    }
                                    break
                                  default:
                                    const { name, email, phone, zip } = checkout
                                    if (name && email && phone && zip) {
                                      document.querySelector('span#complete-button').setAttribute('disabled', true)
                                      this.setState({ active: 'pay', step: 1, infoSubmit: true })
                                    } else {
                                      this.setState({ infoSubmit: true })
                                    }
                                    break
                                }
                              }}
                            >
                              Next
                            </span>
                          </div>)
                      }
                    </div>
                  </ul>
                </div>
              </div>
            </div>
  				</div>
          <Foot />
  			</section>
      </StripeProvider>
    )
  }
}

export default compose(
  graphql(GET_CHECKOUT, { name: 'getCheckout' })
)(Donate)
