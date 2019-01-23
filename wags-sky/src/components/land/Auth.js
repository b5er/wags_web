import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_AUTH, SHOW_AUTH } from '../../graphql/land'


class Auth extends Component {
  render() {

    const { getAuth, showAuth } = this.props

    return (
      <div className={`modal ${getAuth.auth ? 'is-active':''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAuth({ variables: { auth: false } })
            } catch(e) {
              console.log(e)
            }
          }}
        />
        <div className="modal-content">
          <div className="card is-small-rounded">
            <div className="card-content">
              <div className="columns">
                <div className="column">
                  <h1 className="title">
                    Who we are
                  </h1>
                  <p className="subtitle">
                    fesjfkjekfj
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large" aria-label="close"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAuth({ variables: { auth: false } })
            } catch(e) {
              console.log(e)
            }
          }}
        />
      </div>
    )
  }
}

export default compose(
  graphql(SHOW_AUTH, { name: 'showAuth' }),
  graphql(GET_AUTH, { name: 'getAuth' })
)(Auth)
