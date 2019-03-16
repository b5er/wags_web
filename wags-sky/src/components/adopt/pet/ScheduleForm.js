import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_SCHEDULE, SHOW_SCHEDULE } from '../../../graphql/adopt'

// Calendar
import Calendar from 'react-calendar'

// utils
import { book } from '../../../utils/appointmentAPI'
import { regex } from '../../../utils/regex'


class ScheduleForm extends Component {

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      appDate: new Date(),
      appTime: '',
      submit: false,
      complete: false
    }
  }

  async componentDidMount() {
    const { appDate } = this.state
    if (appDate.getDay() === 3) {
      try {
        await this.setState({ appTime: '4:00 pm' })
      } catch(e) {
        console.log(e)
      }
    } else if (appDate.getDay() === 6) {
      try {
        await this.setState({ appTime: '9:00 am' })
      } catch(e) {
        console.log(e)
      }
    }
  }

  bookAppointment = async (submitButton, name, email, appDate, appTime) => {

    try {

      const booked = await book(name, email, appDate, appTime)

      if (booked) {
        submitButton.classList.remove('is-loading')
        submitButton.classList.add('is-no')
        setTimeout(() => submitButton.classList.remove('is-no'), 400)
        document.querySelector('#schedule-general-error').textContent = `${booked.error}`
        return
      }

      setTimeout(() => {
        submitButton.classList.remove('is-loading')
        this.setState({ complete: true })
      }, 500)

    } catch(e) {
      console.log(e)
      setTimeout(() => {
        submitButton.classList.remove('is-loading')
      }, 500)
    }

  }

  render() {

    const { name, email, appDate, appTime, submit, complete } = this.state
    const { getSchedule, showSchedule } = this.props
    const times = {
      '3': ['4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm'],
      '6': ['9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am', '12:00 pm']
    }

    return (
      <div className={`modal ${getSchedule.schedule ? 'is-active':''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
            try {
              await showSchedule({ variables: { schedule: false } })
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
                Schedule
              </h1>
            </div>
            <div className="card-content">
                <div className="columns is-centered">
                  <div className="column is-8">
                    <form
                      onSubmit={e => {
                        e.preventDefault()
                        const submitButton = document.querySelector('#schedule-submit-button')
                        submitButton.classList.add('is-loading')

                        this.setState({ submit: true })

                        if(!name || !email || !email.match(regex.email) || !appDate || !appTime) {
                          submitButton.classList.remove('is-loading')
                          submitButton.classList.add('is-no')
                          setTimeout(() => submitButton.classList.remove('is-no'), 400)
                          return
                        }

                        this.bookAppointment(submitButton, name, email, appDate, appTime)

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
                            className={`input ${email.match(regex.email) ? 'is-success':''} ${submit && (!email || !email.match(regex.email)) ? 'is-danger':''}`}
                            type="email"
                            placeholder="john@gmail.com"
                            onChange={e => this.setState({ email: e.target.value })}
                            value={email}
                          />
                          <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
                          </span>
                          {
                            submit && (!email || !email.match(regex.email)) ?
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
                          submit && !email.match(regex.email) && email.length > 0 ?
                          <p className="help is-danger">
                            This email is invalid
                          </p>
                          :
                          null
                        }
                      </div>

                      <div className="field">
                        <label className="label has-text-isabelline">
                          Date
                        </label>
                        <div className="control" style={{ display: 'flex', justifyContent: 'center' }}>
                          <Calendar
                            className="is-small-rounded light-shadow has-text-pineapple"
                            onChange={appDate => {
                              this.setState({ appDate, appTime: times[appDate.getDay()][0] })
                            }}
                            tileDisabled={({ date }) => date.getDay() !== 3 && date.getDay() !== 6}
                            value={appDate}
                            minDate={new Date()}
                          />
                        </div>
                      </div>

                      <div className="field">
                        <label className="label has-text-isabelline">
                          Time
                        </label>
                        <div className="control">
                          <div className={`select ${appTime ? 'is-success':''} ${submit && !appTime ? 'is-danger':''}`}>
                            <select
                              onChange={e => {
                                  this.setState({ appTime: e.target.value })
                              }}
                            >
                              { appDate.getDay() in times ?
                                  times[appDate.getDay()].map((time, key) => {
                                    return (
                                      <option key={key} value={`${time}`}>
                                        {time}
                                      </option>
                                    )
                                  })
                                  :
                                  null
                              }
                            </select>
                          </div>
                        </div>
                        {
                          submit && !appTime ?
                          <p className="help is-danger">
                            A time is required
                          </p>
                          :
                          null
                        }
                      </div>

                      <p className="subtitle is-size-7 has-text-isabelline">
                        You may also make an appointment by calling 240-553-7811.
                      </p>

                      <div className="field">
                        <div className="control">
                          { complete ?
                              (<span
                                 id="complete-notification"
                                 className="is-malachite-green is-small-rounded"
                               >
                                <i className="fas fa-check has-text-isabelline" />
                              </span>)
                              :
                              (<button
                                id="schedule-submit-button"
                                className="button is-link"
                                onClick={e => {
                                  document.querySelector('#schedule-general-error').textContent = ''
                                }}
                              >
                                Submit
                              </button>)
                          }
                        </div>
                        <p id="schedule-general-error" className="help is-danger" />
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
              await showSchedule({ variables: { schedule: false } })
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
  graphql(SHOW_SCHEDULE, { name: 'showSchedule' }),
  graphql(GET_SCHEDULE, { name: 'getSchedule' })
)(ScheduleForm)
