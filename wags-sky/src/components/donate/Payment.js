import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CHECKOUT, UPDATE_CHECKOUT } from '../../graphql/donate'

// Utils
import { regex } from '../../utils/regex'
import { getStorageItem, setStorageItem } from '../../utils/storage'


class Payment extends Component {

  constructor() {
    super()
    this.state = {
      amount: getStorageItem('amount') ? `${getStorageItem('amount')}`:'',
      interval: getStorageItem('interval') ? `${getStorageItem('interval')}`:'Once',
      card: '',
      expiration: '',
      cvc: ''
    }
  }

  render() {

    const { amount, interval, card, expiration, cvc } = this.state
    const { getCheckout: { checkout }, updateCheckout, submit } = this.props
    console.log(amount, typeof amount)
    return (
      <section className="content">
        <div className="field">
          <label className="label has-text-pineapple">
            Amount
          </label>
          <div className="field has-addons">
            <div className="control has-icons-left">
              <input
                className={`input ${amount.match(regex.amount) ? 'is-success':''} ${submit && !amount.match(regex.amount) ? 'is-danger':''}`}
                type="text"
                onChange={async e => {
                  const updatedAmount = e.target.value
                  this.setState({ amount: updatedAmount })
                  try {
                    if (updatedAmount.match(regex.amount)) {
                      await updateCheckout({ variables: { ...checkout, amount: true } })
                      setStorageItem('amount', updatedAmount)
                    } else {
                      await updateCheckout({ variables: { ...checkout, amount: false } })
                    }
                  } catch(e) {
                    console.log(e)
                  }
                }}
                value={amount}
                placeholder="10.00"
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
                  <option value="Recurring">
                    Recurring
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
        <br />
        <div className="field">
          <label className="label has-text-pineapple">
            Card
            <i className="fab fa-cc-visa fa-lg" />
            <i className="fab fa-cc-mastercard fa-lg" />
            <i className="fab fa-cc-discover fa-lg" />
            <i className="fab fa-cc-amex fa-2x" />
            <i className="fab fa-cc-jcb fa-lg" />
            <i className="fab fa-cc-diners-club fa-lg" />
          </label>
          <div className="control has-icons-left">
            <input
              className={`input ${card.match(regex.card) ? 'is-success':''} ${submit && !card.match(regex.card) ? 'is-danger':''}`}
              type="text"
              onChange={async e => {
                const updatedCard = e.target.value
                this.setState({ card: updatedCard })
                try {
                  if (updatedCard.match(regex.card))
                    await updateCheckout({ variables: { ...checkout, card: true } })
                  else
                    await updateCheckout({ variables: { ...checkout, card: false } })
                } catch(e) {
                  console.log(e)
                }
              }}
              value={card}
              placeholder="4242 4242 4242 4242"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-credit-card" />
            </span>
          </div>
          {
            submit && !card ?
            <p className="help is-danger">
              A card number is required
            </p>
            :
            null
          }
          {
            submit && !card.match(regex.card) && card ?
            <p className="help is-danger">
              This is an invalid card number
            </p>
            :
            null
          }
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label has-text-pineapple">
                Expiration
              </label>
              <div className="control">
                <input
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
                />
              </div>
              {
                submit && !expiration.match(regex.exp) ?
                <p className="help is-danger">
                  An expiration date is required
                </p>
                :
                null
              }
            </div>
            <div className="field">
              <label className="label has-text-pineapple">
                CVC <i className="fas fa-question-circle fa-xs" />
              </label>
              <div className="control">
                <input
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
                />
              </div>
              {
                submit && !cvc.match(regex.cvc) ?
                <p className="help is-danger">
                  A security number is required
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
)(Payment)
