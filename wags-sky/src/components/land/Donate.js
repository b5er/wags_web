import React, { Component } from 'react'

class Donate extends Component {
  constructor() {
    super()
    this.state = {
      checked: true,
      time: 'monthly'
    }
  }

  render() {

    const { checked, time } = this.state

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
                          className={`button is-size-7 has-text-pineapple ${time === 'monthly' ? 'is-green is-selected':''}`}
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ time: 'monthly' })
                          }}
                        >
                          <strong>Monthly</strong>
                        </span>
                        <span
                          className={`button is-size-7 has-text-pineapple ${time === 'one-time' ? 'is-green is-selected':''}`}
                          onClick={e => {
                            e.preventDefault()
                            this.setState({ time: 'one-time' })
                          }}
                        >
                          <strong>One-time</strong>
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
                    <div className="card pointer light-shadow is-small-rounded is-pineapple">
                      <div className="card-content has-text-centered" style={{ padding: '1rem' }}>
                        <h3 className="title is-size-5 has-text-isabelline">
                          $10
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-4">
                    <div className="card pointer light-shadow is-small-rounded is-pineapple">
                      <div className="card-content has-text-centered" style={{ padding: '1rem' }}>
                        <h3 className="title is-size-5 has-text-isabelline">
                          $50
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-4">
                    <div className="card pointer light-shadow is-small-rounded is-pineapple">
                      <div className="card-content has-text-centered" style={{ padding: '1rem' }}>
                        <h3 className="title is-size-5 has-text-isabelline">
                          $100
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="column is-12" />
                  <div className="column is-12">
                    <button
                      className="button is-rounded is-fullwidth is-medium light-shadow is-green" style={{ borderColor: '#61e786' }}
                      onClick={e => {
                        e.preventDefault()
                      }}
                    >
                      <h1 className="has-text-pineapple">
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

export default Donate
