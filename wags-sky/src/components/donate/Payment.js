import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CHECKOUT, UPDATE_CHECKOUT } from '../../graphql/donate'

// Input Mask
import InputMask from 'react-input-mask'

// Stripe
import { CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe } from 'react-stripe-elements'

// Utils
import { regex } from '../../utils/regex'
import { getStorageItem, setStorageItem } from '../../utils/storage'


const createOptions = (padding: ?string) => {
  return {
    style: {
      base: {
        fontSize: '16px',
        color: '#363636',
        fontFamily: '"Noto Sans", Lato',
        '::placeholder': {
          color: '#aab7c4',
        },
        ...(padding ? {padding} : {}),
      },
      invalid: {
        color: '#ff3860',
      },
    },
  };
};

class Payment extends Component {

  constructor() {
    super()
    this.state = {
      amount: getStorageItem('amount') ? `${getStorageItem('amount')}`:'',
      interval: getStorageItem('interval') ? `${getStorageItem('interval')}`:'Once',
      cardNumberEmpty: true,
      cardExpEmpty: true,
      cardCVCEmpty: true
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  borderError = () => {
    document.querySelector('.StripeElement').style.borderColor = '#ff3860'
  }

  render() {

    const { amount, interval, cardNumberEmpty, cardExpEmpty, cardCVCEmpty } = this.state
    const { getCheckout: { checkout }, updateCheckout, submit } = this.props

    return (
      <section className="content">
        <div className="field">
          <label className="label has-text-pineapple">
            Amount
          </label>
          <div className="field has-addons">
            <div className="control has-icons-left">
              <InputMask
                className={`input ${amount.match(regex.amount) ? 'is-success':''} ${submit && !amount.match(regex.amount) ? 'is-danger':''}`}
                type="text"
                onChange={async e => {
                  const updatedAmount = e.target.value
                  this.setState({ amount: updatedAmount })
                  try {
                    if (updatedAmount.match(regex.amount)) {
                      await updateCheckout({ variables: { ...checkout, amount: updatedAmount } })
                      setStorageItem('amount', updatedAmount)
                    } else if (!updatedAmount) {
                      await updateCheckout({ variables: { ...checkout, amount: '0' } })
                      setStorageItem('amount', '0')
                    }
                  } catch(e) {
                    console.log(e)
                  }
                }}
                value={amount}
                placeholder="10"
                mask="999999"
                maskChar={null}
              />
              <span className="icon is-small is-left">
                <i className="fas fa-dollar-sign" />
              </span>
            </div>
            <div className="control">
              <span className={`select is-hovered ${amount.match(regex.amount) ? 'is-success':''} ${submit && !amount.match(regex.amount) ? 'is-danger':''}`}>
                <select
                  onChange={e => {
                    const updatedInterval = e.target.value
                    this.setState({ interval: updatedInterval })
                    setStorageItem('interval', updatedInterval)
                  }}
                  value={interval}
                >
                  <option value="Once">
                    Once
                  </option>
                  <option value="Monthly">
                    Monthly
                  </option>
                </select>
              </span>
            </div>
          </div>
          {
            submit && !amount ?
            <p className="help is-danger">
              An amount is required
            </p>
            :
            null
          }
          {
            submit && !amount.match(regex.amount) && amount ?
            <p className="help is-danger">
              This is an invalid amount
            </p>
            :
            null
          }
        </div>
        <div className="field">
          <div className="columns is-margin-bottomless">
            <div className="column is-3 is-padding-bottomless">
              <label className="label has-text-pineapple">
                Card
              </label>
            </div>
            <div className="column is-padding-bottomless accepted-cards">
              <i className="fab fa-cc-visa fa-sm icon-margin-right" />
              <i className="fab fa-cc-mastercard fa-sm icon-margin-right" />
              <i className="fab fa-cc-discover fa-sm icon-margin-right" />
              <i className="fab fa-cc-amex fa-sm icon-margin-right" />
              <i className="fab fa-cc-jcb fa-sm icon-margin-right" />
              <i className="fab fa-cc-diners-club fa-sm" />
            </div>
          </div>
          <div className="control has-icons-right">
            <CardNumberElement
              {...createOptions()}
              onChange={e => {
                const cardNumberErrors = document.querySelector('#card-number-errors')
                if (e.error) {
                  cardNumberErrors.textContent = `${e.error.message}`
                } else {
                  cardNumberErrors.textContent = ''
                }

                const cardNumber = document.querySelector('.StripeElement')
                if (e.empty) {
                  this.setState({ cardNumberEmpty: true })
                  if (submit)
                    cardNumber.style.borderColor = '#ff3860'
                } else if (e.complete) {
                  cardNumber.style.borderColor = '#23d160'
                } else {
                  this.setState({ cardNumberEmpty: false })
                  cardNumber.style.borderColor = ''
                }
              }}
            />
            <span className="icon is-small is-right">
              <i className="fas fa-credit-card" />
            </span>
            <p id="card-number-errors" className="help is-danger" />
            {
              submit && cardNumberEmpty ?
                <p className="help is-danger">
                  {this.borderError()}
                  A card number is required
                </p>
                :
                null
            }
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label has-text-pineapple">
                Expiration
              </label>
              <CardExpiryElement
                {...createOptions()}
                onChange={e => {
                  const cardExpErrors = document.querySelector('#card-number-errors')
                  if (e.error) {
                    cardExpErrors.textContent = `${e.error.message}`
                  } else {
                    cardExpErrors.textContent = ''
                  }

                  const cardExp = document.querySelector('.StripeElement')
                  if (e.empty) {
                    this.setState({ cardExpEmpty: true })
                    if (submit)
                      cardExp.style.borderColor = '#ff3860'
                  } else if (e.complete) {
                    cardExp.style.borderColor = '#23d160'
                  } else {
                    this.setState({ cardExpEmpty: false })
                    cardExp.style.borderColor = ''
                  }
                }}
              />
              <p id="card-exp-errors" className="help is-danger" />
              {
                submit && cardExpEmpty ?
                  <p className="help is-danger">
                    {this.borderError()}
                    An expiration date is required
                  </p>
                  :
                  null
              }
              {/*<div className="control">
                <InputMask
                  className={`input ${expiration.match(regex.exp) ? 'is-success':''} ${submit && !expiration.match(regex.exp) ? 'is-danger':''}`}
                  type="text"
                  onChange={async e => {
                    const updatedExp = e.target.value
                    this.setState({ expiration: updatedExp })
                    try {
                      if (updatedExp.match(regex.exp))
                        await updateCheckout({ variables: { ...checkout, expiration: true } })
                      else
                        await updateCheckout({ variables: { ...checkout, expiration: false } })
                    } catch(e) {
                      console.log(e)
                    }
                  }}
                  value={expiration}
                  placeholder="10/23"
                  mask="99/99"
                  maskChar={null}
                />
              </div>
              {
                submit && !expiration.match(regex.exp) ?
                <p className="help is-danger">
                  An expiration date is required
                </p>
                :
                null
              }*/}
            </div>
            <div className="field">
              <label className="label has-text-pineapple">
                CVC
                <span className="tooltip" data-tooltip="3 or 4 digit number on back of card.">
                  <i className="fas fa-question-circle fa-xs info-cvc-icon"/>
                </span>
              </label>
              <CardCVCElement {...createOptions()} />
              {/*<div className="control">
                <InputMask
                  className={`input ${cvc.match(regex.cvc) ? 'is-success':''} ${submit && !cvc.match(regex.cvc) ? 'is-danger':''}`}
                  type="text"
                  onChange={async e => {
                    const updatedCVC = e.target.value
                    this.setState({ cvc: updatedCVC })
                    try {
                      if (updatedCVC.match(regex.cvc))
                        await updateCheckout({ variables: { ...checkout, cvc: true } })
                      else
                        await updateCheckout({ variables: { ...checkout, cvc: false } })
                    } catch(e) {
                      console.log(e)
                    }
                  }}
                  value={cvc}
                  placeholder="123"
                  mask="9999"
                  maskChar={null}
                />
              </div>
              {
                submit && !cvc.match(regex.cvc) ?
                <p className="help is-danger">
                  A security number is required
                </p>
                :
                null
              }*/}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default compose(
  graphql(UPDATE_CHECKOUT, { name: 'updateCheckout' }),
  graphql(GET_CHECKOUT, { name: 'getCheckout' })
)(injectStripe(Payment))
