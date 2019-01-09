import React, { Component } from 'react'

class Donate extends Component {
  constructor() {
    super()
    this.state = {
      checked: true
    }
  }

  render() {

    const { checked } = this.state

    return (
      <section className="section is-medium is-ceil">

        <h1 className="title">
          Donate
        </h1>

        <div className="columns">
          <div className="column is-4">
            <div className="card is-small-rounded">
              <div className="card-content">
                <div className="columns">
                  <div className="column">
                    <h1 className="title">
                      {checked ?
                        'Money'
                        :
                        'Item'
                      }
                    </h1>
                  </div>
                  <div className="column">
                    <div className="field">
                      <input
                        id="switchDonation"
                        style={{ backgroundColor: '#61e786 !important' }}
                        type="checkbox"
                        name="switchDonation"
                        className="switch is-info"
                        checked={checked}
                        onChange={e => this.setState({ checked: !checked })}
                      />
                      <label htmlFor="switchDonation" />
                    </div>
                  </div>
                </div>
                <div className="columns">
                  <div className="column">
                    <form>
                      <input
                        placeholder={checked ? 'money':'item'}
                      />
                      <button>
                        Donate
                      </button>
                    </form>
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
