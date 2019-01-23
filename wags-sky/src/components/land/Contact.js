import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CONTACT, SHOW_CONTACT } from '../../graphql/land'


class Contact extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  render() {

    const { name, email, message } = this.state
    const { getContact, showContact } = this.props

    return (
      <div className={`modal ${getContact.contact ? 'is-active':''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
            try {
              await showContact({ variables: { contact: false } })
            } catch(e) {
              console.log(e)
            }
          }}
        />
        <div className="modal-content">
          <div className="card is-pineapple is-small-rounded">
            <div className="card-header light-shadow" style={{ backgroundColor: '#f1f7ed', borderRadius: '4px 4px 0 0', padding: '1em' }}>
              <h1 className="title has-text-pineapple">
                Reach out!
              </h1>
            </div>
            <div className="card-content">
                <div className="columns is-centered">
                  <div className="column is-8">
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        
                      }}
                    >
                      <div className="field">
                        <label className="label has-text-isabelline">
                          Name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="John Doe"
                            onChange={e => this.setState({ name: e.target.value })}
                            value={name}
                          />
                        </div>
                      </div>

                      <div className="field">
                        <label className="label has-text-isabelline">
                          Email
                        </label>
                        <div className="control has-icons-left has-icons-right">
                          <input
                            className="input is-danger"
                            type="email"
                            placeholder="john@gmail.com"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={email}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                          </span>
                          <span className="icon is-small is-right">
                            <i className="fas fa-exclamation-triangle" />
                          </span>
                        </div>
                        <p className="help is-danger">
                          This email is invalid
                        </p>
                      </div>

                      <div className="field">
                        <label className="label has-text-isabelline">
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            placeholder="How can we help you?"
                            onChange={e => this.setState({ message: e.target.value })}
                            value={message}
                          />
                        </div>
                      </div>

                      <div className="field">
                        <div className="control">
                          <button className="button is-link">
                            Submit
                          </button>
                        </div>
                      </div>

                    </form>
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
              await showContact({ variables: { contact: false } })
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
  graphql(SHOW_CONTACT, { name: 'showContact' }),
  graphql(GET_CONTACT, { name: 'getContact' })
)(Contact)
