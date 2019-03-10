import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Input Mask
import InputMask from 'react-input-mask'

// Utils
import { setStorageItem } from '../../../utils/storage'


class Donation extends Component {
  constructor() {
    super()
    this.state = {
      checked: true,
      interval: 'Once',
      amount: ''
    }
  }

  render() {

    const { checked, interval, amount } = this.state
    const { history } = this.props

    return (
      <section className="section is-medium is-ceil">
        <h1 className="title is-size-1 has-text-centered has-text-isabelline">
          Or be part of their success
        </h1>
        <br />
        <div className="columns">
          <div className="column is-4 is-offset-2">
            <div className="columns is-multiline">
              <div className="column is-12" />
              <div className="column is-12" />
              <div className="column is-12" />
              <div className="column">
                <h1 className="subtitle is-size-4 has-text-pineapple">
                  Every bit helps. And you get
                  a nice tax break at the end of the year.
                </h1>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card med-shadow is-isabelline is-small-rounded">
              <div className="card-content">
                <div className="columns is-multiline">
                  <div className="column is-12">
                    <div className="card is-small-rounded is-pineapple">
                      <div className="card-content no-top-padding">
                        <div className="columns">
                          <div className="column is-1 is-offset-2">
                            <h1 className="subtitle is-size-5 dollar-sign has-text-isabelline">
                              $
                            </h1>
                          </div>
                          <div className="column no-top-padding">
                            <form>
                              <div className="field">
                                <InputMask
                                  className="input is-pineapple donation-input has-text-centered"
                                  onChange={e => {
                                    this.setState({ amount: e.target.value })}
                                  }
                                  value={amount}
                                  mask="999999"
                                  maskChar={null}
                                />
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="column is-12" />

                  <div className="column is-4">
                    <div
                      className="card pointer light-shadow is-small-rounded is-davy-grey"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ amount: '10' })
                      }}
                    >
                      <div className="card-content donation-options has-text-centered">
                        <h3 className="title is-size-5 has-text-isabelline">
                          $10
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-4">
                    <div
                      className="card pointer light-shadow is-small-rounded is-davy-grey"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ amount: '50' })
                      }}
                    >
                      <div className="card-content donation-options has-text-centered">
                        <h3 className="title is-size-5 has-text-isabelline">
                          $50
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-4">
                    <div
                      className="card pointer light-shadow is-small-rounded is-davy-grey"
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ amount: '100' })
                      }}
                    >
                      <div className="card-content donation-options has-text-centered">
                        <h3 className="title is-size-5 has-text-isabelline">
                          $100
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-12">
                    <div className="has-text-centered">
                      <div className="buttons has-addons">
                        <span
                          className={`button is-halfwidth is-size-6 ${interval === 'Monthly' ? 'is-davy-grey interval-selected has-text-isabelline is-selected':'interval-unselected has-text-pineapple'}`}
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ interval: 'Monthly' })
                          }}
                        >
                          <strong>Monthly</strong>
                        </span>
                        <span
                          className={`button interval-option is-halfwidth is-size-6 ${interval === 'Once' ? 'is-davy-grey interval-selected has-text-isabelline is-selected':'interval-unselected has-text-pineapple'}`}
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ interval: 'Once' })
                          }}
                        >
                          <strong>Once</strong>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="column is-12" />

                  <div className="column is-12">
                    <button
                      id="landing-checkout-button"
                      disabled={!amount}
                      className="button is-rounded is-fullwidth is-medium light-shadow is-soft-pink"
                      onClick={e => {
                        setStorageItem('amount', amount)
                        setStorageItem('interval', interval)
                        history.push('/donate')
                      }}
                    >
                      <h1 className="has-text-isabelline">
                        <strong>Donate</strong>
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Donation)
