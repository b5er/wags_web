import React, { Component } from 'react'
import CheckoutForm from './CheckoutForm'

// Input Mask
import InputMask from 'react-input-mask'


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
                    <div className="card med-heavy-shadow is-small-rounded is-pineapple">
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

                  <div className="column is-9">
                    <div className="has-text-centered">
                      <div className="buttons has-addons">
                        <span
                          className={`button is-size-7 has-text-pineapple ${interval === 'Monthly' ? 'is-green is-selected':''}`}
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ interval: 'Monthly' })
                          }}
                        >
                          <strong>Monthly</strong>
                        </span>
                        <span
                          className={`button is-size-7 has-text-pineapple ${interval === 'Once' ? 'is-green is-selected':''}`}
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

                  <div className="column is-1">
                    <div className="field">
                      <input
                        id="switchDonation"
                        type="checkbox"
                        name="switchDonation"
                        className="switch is-rounded is-link"
                        checked={checked}
                        onChange={() => this.setState({ checked: !checked })}
                      />
                      <label htmlFor="switchDonation" />
                    </div>
                  </div>

                  <div className="column is-4">
                    <div
                      className="card pointer light-shadow is-small-rounded is-pineapple"
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
                      className="card pointer light-shadow is-small-rounded is-pineapple"
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
                      className="card pointer light-shadow is-small-rounded is-pineapple"
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

                  <div className="column is-12" />
                  <div className="column is-12">
                    <CheckoutForm amount={amount} interval={interval} />
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

export default Donation
