import React, { Component } from 'react'

// Components
import Head from './Head'
import Information from './Information'
import Payment from './Payment'
import Confirmation from './Confirmation'
import Foot from './Foot'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CHECKOUT, UPDATE_CHECKOUT } from '../../graphql/donate'

// Stripe
import { Elements, StripeProvider } from 'react-stripe-elements'

// Utils
import { charge } from '../../utils/stripeAPI'
import { Mixpanel } from '../../utils/mixpanel'


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

  componentDidMount() {
    Mixpanel.track('Donation funnel mounted.')
  }


  completePayment = async (token, amount, interval) => {
    try {

      const { getCheckout: { checkout }, updateCheckout } = await this.props
      const completeButton = document.querySelector('#complete-button')
      completeButton.classList.add('is-loading')
      const { message, stripeError } = await charge(JSON.parse(token), amount, interval, checkout)
      if (stripeError) {
        console.log(stripeError)
        completeButton.classList.remove('is-loading')
        completeButton.classList.add('is-no')
        return
      }
      completeButton.classList.remove('is-loading')
      const receipt = message.receipt_url ? message.receipt_url:message.hosted_invoice_url

      await updateCheckout({ variables: { ...checkout, receipt } })
      this.setState({ active: 'confirm', step: 2, paySubmit: true })

      Mixpanel.track('Donation Funnel: step 2 complete.')
      Mixpanel.people.set({
        amount,
        interval
      })
    } catch(e) {
      console.log(e)
    }
  }

  render() {

    const { active, step, infoSubmit, paySubmit } = this.state
    const { getCheckout: { checkout } } = this.props

    return (
      <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
        <section className="hero is-fullheight is-columbia-blue">
          <Head />
  				<div className="hero-body is-padding-topless">
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
                        <p className="step-title is-size-5 has-text-davy-grey">
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
                        <p className="step-title is-size-5 has-text-davy-grey">
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
                        <p className="step-title is-size-5 has-text-davy-grey">
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
                    <div className={`steps-actions ${active === 'pay' ? 'payment-form-step':''}`}>
                      {
                        active === 'pay' ?
                          (<div className="steps-action">
                            <span
                              className="button payment-back-button v-light-shadow is-isabelline"
                              onClick={e => {
                                this.setState({ active: 'info', step: 0 })
                              }}
                            >
                              <i className="fas fa-arrow-left fa-lg has-text-pineapple" />
                            </span>
                          </div>)
                          :
                          null
                      }
                      {
                        active === 'confirm' ?
                          (<div className="steps-action">
                            <a
                              className="button v-light-shadow receipt-button is-pineapple has-text-isabelline"
                              href={checkout.receipt}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={e => {
                                Mixpanel.track('Clicked receipt.')
                              }}
                            >
                              Receipt
                            </a>
                          </div>)
                          :
                          (<div className="steps-action">
                            <span
                              id="complete-button"
                              className="button v-light-shadow payment-button is-pineapple has-text-isabelline"
                              onClick={e => {
                                switch(active) {
                                  case 'pay':
                                    const { complete, token, amount, interval } = checkout
                                    if (complete && token) {
                                      this.completePayment(token, amount, interval)
                                    } else {
                                      this.setState({ paySubmit: true })
                                    }
                                    break
                                  default:
                                    const { name, email, phone, zip } = checkout
                                    if (name && email && phone && zip) {
                                      this.setState({ active: 'pay', step: 1, infoSubmit: true })
                                      Mixpanel.track('Donation Funnel: step 1 complete.')
                                      Mixpanel.identify(email)
                                      Mixpanel.people.set({
                                        "$email": email,
                                        "$last_login": new Date()
                                      })
                                    } else {
                                      this.setState({ infoSubmit: true })
                                    }
                                    break
                                }
                              }}
                            >
                              {`${active === 'info' ? 'Continue':'Complete'}`}
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
  graphql(GET_CHECKOUT, { name: 'getCheckout' }),
  graphql(UPDATE_CHECKOUT, { name: 'updateCheckout' })
)(Donate)
