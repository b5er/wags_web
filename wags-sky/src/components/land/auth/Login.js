import React, { Component } from 'react'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      submit: false,
      isLoading: false
    }
  }

  render() {

    const { email, password, submit, isLoading } = this.state
    const {
      auth,
      checkAuth,
      history,
      setStorageItem,
      rmStorageItem
    } = this.props

    return (
        <form
          id="login-tab"
          className={`tab-content ${auth.type === 'login' ? 'is-active':''}`}
          onSubmit={async e => {
            e.preventDefault()
            this.setState({ submit: true })
            if(!email || !password)
              return
            // rmStorageItem('token')
            // const config = {
            //     user: {
            //         email,
            //         password
            //     }
            // }
            // try {
            //     const user = await fetch('http://localhost:8000/api/account/login', {
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
                    if(!email || !password)
                      return
                    this.setState({ isLoading: true })
                  }}
                >
                  Login
                </button>
            </div>
        </form>
    )
  }
}

export default Login
