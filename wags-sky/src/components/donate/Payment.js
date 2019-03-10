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
      cardCVCEmpty: true,
      complete: {
        cardNumberComplete: false,
        cardExpComplete: false,
        cardCVCComplete: false
      },
      token: null
    }
  }

  borderError = element => {
    document.querySelector(element).style.borderColor = '#ff3860'
  }

  submit = async (amount, complete) => {
    const { cardNumberComplete, cardExpComplete, cardCVCComplete } = complete
    if (cardNumberComplete && cardExpComplete && cardCVCComplete) {
      try {

        const { getCheckout: { checkout }, updateCheckout } = await this.props
        const { token, error } = await this.props.stripe.createToken({ name: checkout.name, address_zip: checkout.zip })

        if (error) {
          console.log(error)
          return
        }

        await updateCheckout({ variables: { ...checkout, complete: true, interval: this.state.interval, token: JSON.stringify(token) } })

      } catch(e) {
        console.log(e)
      }
    }
  }

  render() {

    const { amount, interval, cardNumberEmpty, cardExpEmpty, cardCVCEmpty, complete } = this.state
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
                  onChange={async e => {
                    const updatedInterval = e.target.value
                    this.setState({ interval: updatedInterval })
                    setStorageItem('interval', updatedInterval)
                    try {
                      await updateCheckout({ variables: { ...checkout, interval: updatedInterval } })
                    } catch(e) {
                      console.log(e)
                    }
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
              id="card-num-element"
              {...createOptions()}
              onChange={e => {
                const cardNumberErrors = document.querySelector('#card-number-errors')
                if (e.error) {
                  cardNumberErrors.textContent = `${e.error.message}`
                } else {
                  cardNumberErrors.textContent = ''
                }

                const cardNumber = document.querySelector('#card-num-element')
                if (e.empty) {
                  this.setState({ cardNumberEmpty: true })
                  if (submit)
                    cardNumber.style.borderColor = '#ff3860'
                } else if (e.complete) {
                  const updatedComplete = {...complete, cardNumberComplete: true }
                  this.setState({ complete: updatedComplete })
                  cardNumber.style.borderColor = '#23d160'
                  this.submit(amount, updatedComplete)
                } else {
                  const updatedComplete = {...complete, cardNumberComplete: false }
                  this.setState({ complete: updatedComplete, cardNumberEmpty: false })
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
                  {this.borderError('#card-num-element')}
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
                id="card-exp-element"
                {...createOptions()}
                onChange={e => {
                  const cardExpErrors = document.querySelector('#card-exp-errors')
                  if (e.error) {
                    cardExpErrors.textContent = `${e.error.message}`
                  } else {
                    cardExpErrors.textContent = ''
                  }

                  const cardExp = document.querySelector('#card-exp-element')
                  if (e.empty) {
                    this.setState({ cardExpEmpty: true })
                    if (submit)
                      cardExp.style.borderColor = '#ff3860'
                  } else if (e.complete) {
                    const updatedComplete = {...complete, cardExpComplete: true }
                    this.setState({ complete: updatedComplete })
                    cardExp.style.borderColor = '#23d160'
                    this.submit(amount, updatedComplete)
                  } else {
                    const updatedComplete = {...complete, cardExpComplete: false }
                    this.setState({ complete: updatedComplete, cardExpEmpty: false })
                    cardExp.style.borderColor = ''
                  }
                }}
              />
              <p id="card-exp-errors" className="help is-danger" />
              {
                submit && cardExpEmpty ?
                  <p className="help is-danger">
                    {this.borderError('#card-exp-element')}
                    An expiration date is required
                  </p>
                  :
                  null
              }
            </div>
            <div className="field">
              <label className="label has-text-pineapple">
                CVC
                <span className="tooltip" data-tooltip="3 or 4 digit number on back of card.">
                  <i className="fas fa-question-circle fa-xs info-cvc-icon"/>
                </span>
              </label>
              <CardCVCElement
                id="card-cvc-element"
                {...createOptions()}
                onChange={e => {
                  const cardCVCErrors = document.querySelector('#card-cvc-errors')
                  if (e.error) {
                    cardCVCErrors.textContent = `${e.error.message}`
                  } else {
                    cardCVCErrors.textContent = ''
                  }

                  const cardCVC = document.querySelector('#card-cvc-element')
                  if (e.empty) {
                    this.setState({ cardCVCEmpty: true })
                    if (submit)
                      cardCVC.style.borderColor = '#ff3860'
                  } else if (e.complete) {
                    const updatedComplete = {...complete, cardCVCComplete: true }
                    this.setState({ complete: updatedComplete })
                    cardCVC.style.borderColor = '#23d160'
                    this.submit(amount, updatedComplete)
                  } else {
                    const updatedComplete = {...complete, cardCVCComplete: false }
                    this.setState({ complete: updatedComplete, cardCVCEmpty: false })
                    cardCVC.style.borderColor = ''
                  }
                }}
              />
              <p id="card-cvc-errors" className="help is-danger" />
              {
                submit && cardCVCEmpty ?
                  <p className="help is-danger">
                    {this.borderError('#card-cvc-element')}
                    An expiration date is required
                  </p>
                  :
                  null
              }
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
