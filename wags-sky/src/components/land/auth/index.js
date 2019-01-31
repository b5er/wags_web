import React, { Component } from 'react'

// Components
import Login from './Login'
import Signup from './Signup'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_AUTH, SHOW_AUTH } from '../../../graphql/land'

// Utils
import { setStorageItem, rmStorageItem } from '../../../utils/storage'
import { checkAuth } from '../../../utils/auth'


class Auth extends Component {
  render() {

    const { getAuth, getAuth: { auth }, showAuth } = this.props

    if(getAuth.loading)
      return <h1>Loading</h1> // TODO: loading animation.

    if(!auth)
      return null // TODO: error animation.

    return (
      <div className={`modal ${auth.show ? 'is-active':''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAuth({ variables: { show: false, type: 'login' } })
            } catch(e) {
              console.log(e)
            }
          }}
        />
          <div className="modal-content">
            <div className="card is-pineapple is-small-rounded">
              <div className="card-header modal-header-auth">
                <div className="tabs">
                    <ul>
                        <li
                          data-tab="login-tab"
                          onClick={async e => {
                            e.preventDefault()
                            try {
                              await showAuth({ variables: { show: true, type: 'login' } })
                            } catch(e) {
                              console.log(e)
                            }
                          }}
                        >
                          <span className={`has-text-pineapple auth-tabs ${auth.type === 'login' ? 'is-active':''}`}>
                            Login
                          </span>
                        </li>
                        <li
                          data-tab="register-tab"
                          onClick={async e => {
                            e.preventDefault()
                            try {
                              await showAuth({ variables: { show: true, type: 'signup' } })
                            } catch(e) {
                              console.log(e)
                            }
                          }}
                        >
                          <span className={`has-text-pineapple auth-tabs ${auth.type === 'signup' ? 'is-active':''}`}>
                            Signup
                          </span>
                        </li>
                    </ul>
                </div>
              </div>
              <div className="card-content">

                <div className="columns is-centered">
                  <div className="column is-6">
                    {
                      auth.type === 'login' ?
                        <Login
                          auth={auth}
                          checkAuth={checkAuth}
                          // history={history}
                          setStorageItem={setStorageItem}
                          rmStorageItem={rmStorageItem}
                        />
                        :
                        <Signup
                          auth={auth}
                          checkAuth={checkAuth}
                          // history={history}
                          setStorageItem={setStorageItem}
                          rmStorageItem={rmStorageItem}
                        />
                    }
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
              await showAuth({ variables: { show: false, type: 'login' } })
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
