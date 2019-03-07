import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_CHECKOUT, UPDATE_CHECKOUT } from '../../graphql/donate'

// Input Mask
import InputMask from 'react-input-mask'

// Utils
import { regex } from '../../utils/regex'


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

  beforeMaskedValueChange = (newState, oldState, userInput) => {
    let { value } = newState
    let selection = newState.selection
    let cursorPosition = selection ? selection.start:null

    // Keep dash if entered by user
    if (value.endsWith('-') && userInput !== '-' && !this.state.zip.endsWith('-')) {
      if (cursorPosition === value.length) {
        cursorPosition--
        selection = { start: cursorPosition, end: cursorPosition }
      }
      value = value.slice(0, -1)
    }

    return { value, selection }
  }

  render() {

    const { name, email, phone, zip } = this.state
    const { getCheckout: { checkout }, updateCheckout, submit } = this.props

    return (
      <section className="content">
        <div className="field">
          <label className="label has-text-pineapple">
            Name
          </label>
          <div className="control">
            <input
              className={`input ${name ? 'is-success':''} ${submit && !name ? 'is-danger':''}`}
              type="text"
              onChange={async e => {
                this.setState({ name: e.target.value })
                try {
                  await updateCheckout({ variables: { ...checkout, name: e.target.value } })
                } catch(e) {
                  console.log(e)
                }
              }}
              value={name}
              placeholder="Jane Doe"
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
          <label className="label has-text-pineapple">
            Email
          </label>
          <div className="control has-icons-left has-icons-right">
            <input
              className={`input ${email.match(regex.email) ? 'is-success':''}  ${submit && !email ? 'is-danger':''}`}
              type="text"
              onChange={async e => {
                const updatedEmail = e.target.value
                this.setState({ email: updatedEmail })
                try {
                  if (updatedEmail.match(regex.email))
                    await updateCheckout({ variables: { ...checkout, email: updatedEmail } })
                } catch(e) {
                  console.log(e)
                }
              }}
              value={email}
              placeholder="janedoe@gmail.com"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            {
              submit && !email.match(regex.email) ?
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
            submit && !email.match(regex.email) && email ?
              <p className="help is-danger">
                This email is invalid
              </p>
              :
              null
          }
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label has-text-pineapple">
                Phone
              </label>
              <div className="control">
                <InputMask
                  className={`input ${phone.match(regex.phone) ? 'is-success':''}  ${submit && !phone ? 'is-danger':''}`}
                  type="text"
                  onChange={async e => {
                    const updatedPhone = e.target.value.replace(/[\(\)\s-]+/g, '')
                    this.setState({ phone: updatedPhone })

                    try {
                      if (updatedPhone.match(regex.phone))
                        await updateCheckout({ variables: { ...checkout, phone: updatedPhone } })
                    } catch(e) {
                      console.log(e)
                    }
                  }}
                  value={phone}
                  placeholder="(214) 123-1234"
                  mask="(999) 999-9999"
                  maskChar=" "
                />
              </div>
              {
                submit && !phone.match(regex.phone) ?
                  <p className="help is-danger">
                    A phone number is required
                  </p>
                  :
                  null
              }
            </div>
            <div className="field">
              <label className="label has-text-pineapple">
                Zip
              </label>
              <div className="control">
                <InputMask
                  className={`input ${zip.match(regex.zip) ? 'is-success':''}  ${submit && !zip ? 'is-danger':''}`}
                  type="text"
                  onChange={async e => {
                    const updatedZip = e.target.value
                    this.setState({ zip: updatedZip })
                    try {
                      if (updatedZip.match(regex.zip))
                        await updateCheckout({ variables: { ...checkout, zip: updatedZip } })
                    } catch(e) {
                      console.log(e)
                    }
                  }}
                  value={zip}
                  placeholder="12345"
                  beforeMaskedValueChange={this.beforeMaskedValueChange}
                  mask="99999-9999"
                  maskChar={null}
                />
              </div>
              {
                submit && !zip.match(regex.zip) ?
                  <p className="help is-danger">
                    A zip code is required
                  </p>
                  :
                  null
              }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default compose(
  graphql(UPDATE_CHECKOUT, { name: 'updateCheckout' }),
  graphql(GET_CHECKOUT, { name: 'getCheckout' })
)(Information)
