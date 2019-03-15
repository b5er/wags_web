import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_AUTH } from '../../graphql/land'

// Assets
import WagsLogo from '../../assets/images/wagsLogo.svg'


class Navbar extends Component {
  constructor() {
		super()
		this.state = {
			item: ''
		}
	}

  render() {

    const { item } = this.state
    const { showAuth, history } = this.props

    return (
      <nav className="navbar is-spaced is-columbia-blue">
        <div className="container">
          <div className="navbar-brand">
            <Link to={'/'} className="navbar-item">
              <img alt="Wags logo." className="wags-logo wags-logo-pineapple" width={50} src={WagsLogo} />
              <h1 className="title landing-navbar-title has-text-pineapple">
                Wags
              </h1>
            </Link>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <div
              className={`navbar-item is-tab ${item === 'signup' ? 'is-active':''} pointer has-text-davy-grey`}
              onMouseEnter={() => this.setState({ item: 'signup' })}
              onMouseLeave={() => this.setState({ item: '' })}
              onClick={async e => {
                e.preventDefault()
                try {
                  await showAuth({ variables: { show: true, type: 'signup' } })
                } catch(e) {
                  //TODO: add animation or user-friendly error
                  console.log(e)
                }
              }}
            >
              Sign up
            </div>
            <div className="navbar-item" />
            <div
              className={`
                navbar-item ${item === 'donate' ? 'is-active':''}
                pointer
                button
                is-rounded
                is-soft-pink
                has-text-isabelline
                is-medium
                landing-donate-button
                v-light-shadow
              `}
              onMouseEnter={() => this.setState({ item: 'donate' })}
              onMouseLeave={() => this.setState({ item: '' })}
              onClick={e => {
                e.preventDefault()
                history.push('/donate')
              }}
            >
              Donate
            </div>
          </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default compose(
  graphql(SHOW_AUTH, { name: 'showAuth' })
)(withRouter(Navbar))
