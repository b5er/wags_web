import React, { Component } from 'react'


class Signup extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      submit: false,
      isLoading: false
    }
  }

  render() {

    const { name, email, password, submit, isLoading } = this.state
    const {
      auth,
      // checkAuth,
      // history,
      // setStorageItem,
      // rmStorageItem
    } = this.props

    if(!auth)
      return null // TODO: something went wrong animation.

    return (
      <form
        id="signup-tab"
        className={`tab-content ${auth.type === 'signup' ? 'is-active':''}`}
        onSubmit={async e => {
          e.preventDefault()
          this.setState({ submit: true })
          if(!name || !email || !password)
            return
          // rmStorageItem('token')
          // const config = {
          //     user: {
          //         fullName,
          //         email,
          //         password,
          //         isOwner
          //     }
          // }
          // try {
          //     const user = await fetch('http://localhost:8000/api/account/signup', {
          //         method: 'post',
          //         headers: {'Content-Type':'application/json'},
          //         body: JSON.stringify(config)
          //     })
          //     const user_token = await user.json()
          //     try {
          //       setStorageItem('token', user_token.user.token)
          //     } catch(e) {
          //       console.log('No Token.')
          //     }
          //     if(checkAuth())
          //       history.replace('/dashboard', '/')
          //     else
          //       this.setState({ isLoading: false })
          // } catch(e) {
          //     console.log(e)
          // }
        }}
      >
          <div className="field">
              <label className="has-text-isabelline">
                Name
              </label>
              <div className="control">
                  <input
                    type="text"
                    className={`input ${name.length > 0 ? 'is-success':''} ${submit && !name ? 'is-danger':''}`}
                    onChange={e => this.setState({ name: e.target.value })}
                    value={name}
                    placeholder="Name"
                    autoComplete="off"
                  />
              </div>
              {
                submit && !name ?
                <p className="help is-danger">
                  A name is required
                </p>
                :
                null
              }
          </div>

          <div className="field">
              <label className="has-text-isabelline">
                Username
              </label>
              <div className="control">
                  <input
                    type="text"
                    className={`input ${email.length > 0 ? 'is-success':''} ${submit && !email ? 'is-danger':''}`}
                    onChange={e => this.setState({ email: e.target.value })}
                    value={email}
                    placeholder="Email"
                    autoComplete="off"
                  />
              </div>
              {
                submit && !email ?
                <p className="help is-danger">
                  A username is required
                </p>
                :
                null
              }
          </div>

          <div className="field">
              <label className="has-text-isabelline">
                Password
              </label>
              <div className="control">
                  <input
                    type="password"
                    className={`input ${password.length > 0 ? 'is-success':''} ${submit && !password ? 'is-danger':''}`}
                    onChange={e => this.setState({ password: e.target.value })}
                    value={password}
                    placeholder="Password"
                    autoComplete="new-password"
                  />
              </div>
              {
                submit && !password ?
                <p className="help is-danger">
                  A password is required
                </p>
                :
                null
              }
          </div>

          <br />

          <div className="field has-text-centered">
              <button
                type="submit"
                className={`button ${isLoading ? 'is-loading':''} is-fullwidth is-rounded is-link`}
                onClick={e => {
                  if(!name || !email || !password)
                    return
                  this.setState({ isLoading: true })
                }}
              >
                Signup
              </button>
          </div>
      </form>
    )
  }
}

export default Signup
