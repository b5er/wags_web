import React, { Component } from 'react'
import CheckoutForm from './CheckoutForm'

class Donation extends Component {
  constructor() {
    super()
    this.state = {
      checked: true,
      interval: 'one-time',
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
                      <div className="card-content" style={{ paddingTop: '0' }}>
                        <div className="columns">
                          <div className="column is-1 is-offset-2">
                            <h1 className="subtitle is-size-5 has-text-isabelline" style={{ position: 'absolute', zIndex: '1', marginLeft: '.5em', marginTop: '.8em'}}>
                              $
                            </h1>
                          </div>
                          <div className="column" style={{ paddingTop: '0' }}>
                            <form>
                              <div className="field">
                                <input
                                  className="input is-pineapple has-text-centered"
                                  onChange={e => {
                                    if(!isNaN(e.target.value))
                                      this.setState({ amount: e.target.value })}
                                  }
                                  value={amount}
                                  style={{ borderBottomWidth: '2px', borderColor: '#48435c', boxShadow: 'none', borderBottomColor: '#61e786', borderRadius: '0', width: '60%', fontSize: '1.5em', fontWeight: 'bold', padding: '1em .2em 0 .2em', color: 'white' }}
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
                          className={`button is-size-7 has-text-pineapple ${interval === 'month' ? 'is-green is-selected':''}`}
                          onClick={e => {
                            e.preventDefault()
                            //TODO - Change to 'month'
                            /*Testing - we will do daily for now.*/
                            this.setState({ interval: 'month' })
                          }}
                        >
                          <strong>Monthly</strong>
                        </span>
                        <span
                          className={`button is-size-7 has-text-pineapple ${interval === 'one-time' ? 'is-green is-selected':''}`}
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ interval: 'one-time' })
                          }}
                        >
                          <strong>One-Time</strong>
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
                      <div className="card-content has-text-centered" style={{ padding: '1rem' }}>
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
                      <div className="card-content has-text-centered" style={{ padding: '1rem' }}>
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
                      <div className="card-content has-text-centered" style={{ padding: '1rem' }}>
                        <h3 className="title is-size-5 has-text-isabelline">
                          $100
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-12" />
                  <div className="column is-12">
                    <CheckoutForm amount={ parseFloat(amount) } interval = {interval} />
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
