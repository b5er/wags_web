import React, { Component } from 'react'

class Information extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '',
      zip: ''
    }
  }

  render() {

    const { name, email, phone, zip } = this.state

    return (
      <section className="content">
        <div className="field">
          <label className="label has-text-pineapple">
            Name
          </label>
          <div className="control">
            <input
              className={`input ${name ? 'is-success':''}`}
              type="text"
              onChange={e => this.setState({ name: e.target.value })}
              value={name}
              placeholder="Jane Doe"
            />
          </div>
          {
            // submit && !name ?
            // <p className="help is-danger">
            //   A name is required
            // </p>
            // :
            // null
          }
        </div>
        <div className="field">
          <label className="label has-text-pineapple">
            Email
          </label>
          <div className="control">
            <input
              className={`input ${email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? 'is-success':''}`}
              type="text"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
              placeholder="janedoe@gmail.com"
            />
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label has-text-pineapple">
                Phone
              </label>
              <div className="control">
                <input
                  className={`input ${phone ? 'is-success':''}`}
                  type="text"
                  onChange={e => this.setState({ phone: e.target.value })}
                  value={phone}
                  placeholder="(301) 213-4341"
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-pineapple">
                Zip
              </label>
              <div className="control">
                <input
                  className={`input ${zip ? 'is-success':''}`}
                  type="text"
                  onChange={e => this.setState({ zip: e.target.value })}
                  value={zip}
                  placeholder="12345"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Information
