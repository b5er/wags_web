import React, { Component } from 'react'

// Components
import Dog7 from '../../assets/images/dog7.jpg'

class Dashboard extends Component {
  render() {
    return (
        <div className="section is-ceil is-paddingless">
          <nav
            className={`navbar dashboard-navbar light-shadow`}
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <div className="navbar-item pointer">
                <h1 className={`title has-text-isabelline`}>
                  Wags
                </h1>
              </div>

              <span
                role="button"
                className={`navbar-burger`}
                aria-label="menu"
                aria-expanded="false"
              >
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
              </span>
            </div>
            <div className={`navbar-menu`}>
              <div className="navbar-end">
                <div
                  className={`navbar-item pointer has-text-grey`}
                  style={{ padding: '0 1em' }}
                >
                  <i className="fas fa-envelope has-text-isabelline" />
                </div>
                <div
                  className={`navbar-item pointer has-text-grey`}
                  style={{ padding: '0 2em 0 1em' }}
                >
                  <i className="fas fa-bell has-text-isabelline" />
                </div>
                <div
                  className={`navbar-item pointer turn-off has-text-grey`}
                >
                  <i className="fas fa-power-off" />
                </div>
              </div>
            </div>
          </nav>
          <div className="columns">
            <aside className="column is-2 light-shadow is-pineapple" style={{ padding: '1.5rem 0 1rem 1.5rem' }}>
                <figure className="image" style={{ padding: '1em 2em 0 .5em', display: 'flex', justifyContent: 'center' }}>
                  <img className="is-large-rounded light-shadow pointer" src={Dog7} style={{ height: '100px', width: '100px' }} alt="Dog profile." />
                </figure>
                <span style={{ display: 'flex', justifyContent: 'center', padding: '1em 2em 2em .5em' }}>
                  <div className="columns">
                    <div className="column" style={{ paddingRight: '0' }}>
                      <p className="subtitle has-text-isabelline">
                        Pepz
                      </p>
                    </div>
                    <div className="column is-2" style={{ paddingLeft: '.25rem' }}>
                      <i className="fas fa-sort-down pointer has-text-green" />
                    </div>
                  </div>
                </span>
              <nav className="menu">
              {/*  <p className="menu-label has-text-blue">
                  Home
                </p>*/}
                <ul className="menu-list">
                  <li>
                    <a className="is-active">
                      <i className="fas fa-home has-right-small-padding has-text-blue" />
                      <strong>Home</strong>
                    </a>
                  </li>
                  <li>
                    <a className="has-text-isabelline-important">
                      <i className="fas fa-briefcase-medical has-right-small-padding has-text-blue" />
                      Medical
                    </a>
                  </li>
                  <li>
                    <a className="has-text-isabelline-important">
                      <i className="fas fa-calendar-check has-right-small-padding has-text-blue" />
                      Appointments
                    </a>
                  </li>
                  <li>
                    <a className="has-text-isabelline-important" style={{ padding: '.5em .75em .5em .45em' }}>
                      <i className="fas fa-piggy-bank has-right-small-padding has-text-blue" />
                      Orders
                    </a>
                  </li>
                  <li>
                    <a className="has-text-isabelline-important" style={{ padding: '.5em .75em .5em .45em' }}>
                      <i className="fas fa-users has-right-small-padding has-text-blue" />
                      Community
                    </a>
                  </li>
                </ul>
              </nav>
            </aside>

            <main className="column" style={{ padding: '3rem 3rem 1rem 3rem' }}>
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <div className="title">Dashboard</div>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <button type="button" className="button is-small">
                      March 8, 2017 - April 6, 2017
                    </button>
                  </div>
                </div>
              </div>

              <div className="columns is-multiline">
                <div className="column">
                  <div className="box">
                    <div className="heading">Top Seller Total</div>
                    <div className="title">56,950</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Sales $</div>
                          <div className="title is-5">250,000</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Overall $</div>
                          <div className="title is-5">750,000</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Sales %</div>
                          <div className="title is-5">25%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <div className="heading">Revenue / Expenses</div>
                    <div className="title">55% / 45%</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Rev Prod $</div>
                          <div className="title is-5">30%</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Rev Serv $</div>
                          <div className="title is-5">25%</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Exp %</div>
                          <div className="title is-5">45%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <div className="heading">Feedback Activity</div>
                    <div className="title">78% &uarr;</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Positive</div>
                          <div className="title is-5">1560</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Negative</div>
                          <div className="title is-5">368</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Pos/Neg %</div>
                          <div className="title is-5">77% / 23%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="box">
                    <div className="heading">Orders / Returns</div>
                    <div className="title">75% / 25%</div>
                    <div className="level">
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Orders $</div>
                          <div className="title is-5">425,000</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Returns $</div>
                          <div className="title is-5">106,250</div>
                        </div>
                      </div>
                      <div className="level-item">
                        <div className="">
                          <div className="heading">Success %</div>
                          <div className="title is-5">+ 28,5%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="columns is-multiline">
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Expenses: Daily - $700
                    </p>
                    <div className="panel-block">
                      <figure className="image is-16x9">
                        <img src="https://placehold.it/1280x720"/>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Refunds: Daily - $200
                    </p>
                    <div className="panel-block">
                      <figure className="image is-16x9">
                        <img src="https://placehold.it/1280x720"/>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Something
                    </p>
                    <div className="panel-block">
                      <figure className="image is-16x9">
                        <img src="https://placehold.it/1280x720"/>
                      </figure>
                    </div>
                  </div>
                </div>
                <div className="column is-6">
                  <div className="panel">
                    <p className="panel-heading">
                      Something Else
                    </p>
                    <div className="panel-block">
                      <figure className="image is-16x9">
                        <img src="https://placehold.it/1280x720"/>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
    )
  }
}

export default Dashboard
