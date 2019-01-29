import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
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
              className={`navbar-item navbar-message pointer has-text-grey`}
            >
              <i
                className="fas fa-envelope badge is-badge-info is-badge-small has-text-isabelline"
                data-badge=""
              />
            </div>
            <div
              className={`navbar-item navbar-notification pointer has-text-grey`}
            >
              <i
                className="fas fa-bell badge is-badge-info is-badge-small has-text-isabelline"
                data-badge=""
              />
            </div>
            <div
              className={`navbar-item pointer turn-off has-text-grey`}
            >
              <i className="fas fa-power-off" />
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
