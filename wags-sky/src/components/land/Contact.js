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
      message: '',
      submit: false,
      isLoading: false
    }
  }

  render() {

    const { name, email, message, submit, isLoading } = this.state
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
              //TODO: add animation or user-friendly error
              console.log(e)
            }
            this.setState({ submit: false, isLoading: false })
          }}
        />
        <div className="modal-content">
          <div className="card is-pineapple is-small-rounded">
            <div className="card-header modal-header">
              <h1 className="title has-text-pineapple">
                Contact us
              </h1>
            </div>
            <div className="card-content">
                <div className="columns is-centered">
                  <div className="column is-8">
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        this.setState({ submit: true })
                        if(!name || !email || !message)
                          return

                        this.setState({ isLoading: false })
                      }}
                    >
                      <div className="field">
                        <label className="label has-text-isabelline">
                          Name
                        </label>
                        <div className="control">
                          <input
                            className={`input ${name.length > 0 ? 'is-success':''} ${submit && !name ? 'is-danger':''}`}
                            type="text"
                            placeholder="John Doe"
                            onChange={e => this.setState({ name: e.target.value })}
                            value={name}
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
                        <label className="label has-text-isabelline">
                          Email
                        </label>
                        <div className="control has-icons-left has-icons-right">
                          <input
                            className={`input ${email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? 'is-success':''} ${submit && !email ? 'is-danger':''}`}
                            type="email"
                            placeholder="john@gmail.com"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={email}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                          </span>
                          {
                            submit && (!email || !email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) ?
                            <span className="icon is-small is-right">
                              <i className="fas fa-exclamation-triangle has-text-danger" />
                            </span>
                            :
                            null
                          }
                        </div>
                        {
                          submit && !email ?
                          <p className="help is-danger">
                            An email is required
                          </p>
                          :
                          null
                        }
                        {
                          submit && !email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) && email.length > 0 ?
                          <p className="help is-danger">
                            This email is invalid
                          </p>
                          :
                          null
                        }
                      </div>

                      <div className="field">
                        <label className="label has-text-isabelline">
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className={`textarea ${message.length > 0 ? 'is-success':''} ${submit && !message ? 'is-danger':''}`}
                            placeholder="How can we help you?"
                            onChange={e => this.setState({ message: e.target.value })}
                            value={message}
                          />
                        </div>
                        {
                          submit && !message ?
                          <p className="help is-danger">
                            A message is required
                          </p>
                          :
                          null
                        }
                      </div>

                      <div className="field">
                        <div className="control">
                          <button
                            className={`button ${isLoading ? 'is-loading':''} is-link`}
                            onClick={e => {
                              if(!name || !email || !message)
                                return
                              this.setState({ isLoading: true })
                            }}
                          >
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
              //TODO: add animation or user-friendly error
              console.log(e)
            }
            this.setState({ submit: false, isLoading: false })
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
