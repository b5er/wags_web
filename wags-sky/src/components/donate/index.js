import React, { Component } from 'react'

// Components
import Head from './Head'
import Information from './Information'
import Payment from './Payment'
import Confirmation from './Confirmation'
import Foot from './Foot'


class Donate extends Component {

  constructor() {
    super()
    this.state = {
      active: 'info',
      completed: 0
    }
  }

  render() {

    const { active, completed } = this.state

    return (
      <section className="hero is-fullheight is-blue">
        <Head />
				<div className="hero-body">
          <div className="container">
  					<div className="columns is-centered">
              <div className="column is-6">
                <ul className="steps is-medium">
                  <li className={`step-item ${active === 'info' ? 'is-active':''} ${completed >= 0 ? 'is-completed':''}`}>
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
                  <li className={`step-item ${active === 'pay' ? 'is-active':''} ${completed >= 1 ? 'is-completed':''}`}>
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
                  <li className={`step-item ${active === 'confirm' ? 'is-active':''} ${completed === 2 ? 'is-completed':''}`}>
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
                          <Information />
                        </div>
                        <div className={`step-content ${active === 'pay' ? 'is-active':''}`}>
                          <Payment />
                        </div>
                        <div className={`step-content ${active === 'confirm' ? 'is-active':''}`}>
                          <Confirmation />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="steps-actions">
                    { active === 'pay' ?
                        (<div className="steps-action">
                          <span
                            className="button is-light"
                            onClick={e => {
                              this.setState({ active: 'info', completed: 0 })
                            }}
                          >
                            Previous
                          </span>
                        </div>)
                        :
                        null
                    }
                    { active === 'confirm' ?
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
                            className="button is-light"
                            onClick={e => {
                              switch(active) {
                                case 'pay':
                                  // If inputs are valid do this
                                  this.setState({ active: 'confirm', completed: 2 })
                                  break
                                default:
                                  // If inputs are valid do this
                                  this.setState({ active: 'pay', completed: 1 })
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
    )
  }
}

export default Donate
