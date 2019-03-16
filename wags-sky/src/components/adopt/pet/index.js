import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Components
import ScheduleForm from './ScheduleForm'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_SCHEDULE } from '../../../graphql/adopt'

// utils
import { fetchOnePet } from '../../../utils/petAPI'


class Pet extends Component {

  constructor() {
    super()
    this.state = {
      pet: {}
    }
  }

  componentDidMount() {
    document.addEventListener('load', this.getImage())
  }

  componentWillUnmount() {
    document.removeEventListener('load', this.getImage)
  }

  getImage = async () => {
    try {
      const pet = await fetchOnePet(this.props.petID)
      this.setState({ pet })
    } catch(e) {
      console.log(e)
    }
  }

  render() {

    const { pet } = this.state
    const { showSchedule } = this.props

    return (
      <section className="section is-small" style={{ paddingBottom: '0' }}>
        <div className="columns is-vcentered">
          <div className="column is-6">
            <figure className="image is-3by4">
              { Object.entries(pet).length !== 0 && pet.constructor === Object ?
                  <img
                    className="is-small-rounded"
                    src={`https://storage.googleapis.com/${process.env.REACT_APP_GOOGLE_BUCKET_NAME}/${pet.cloudStorageObject}`}
                    alt="Pet information."
                  />
                  :
                  null
              }
            </figure>
          </div>
          <div className="column is-5 is-offset-1">
            <div className="columns is-multiline">
              <div className="column is-12 is-padding-topless">
                <Link
                  to={'/adopt'}
                  className="button adopt-back-button v-light-shadow is-pineapple"
                >
                  <i className="fas fa-arrow-left fa-lg has-text-isabelline" />
                </Link>
              </div>
              <div className="column is-12" />
              <div className="column is-4">
                <span className="">
                  <h1 className="title is-size-5 has-text-pineapple">
                    Name
                  </h1>
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    {pet.name}
                  </h2>
                </span>
              </div>
              <div className="column is-3">
                <span className="">
                  <h1 className="title is-size-5 has-text-pineapple">
                    Age
                  </h1>
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    {pet.age}
                  </h2>
                </span>
              </div>
              <div className="column is-4">
                <span className="">
                  <h1 className="title is-size-5 has-text-pineapple">
                    Gender
                  </h1>
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    {pet.gender}
                  </h2>
                </span>
              </div>
              <div className="column is-4">
                <span className="">
                  <h1 className="title is-size-5 has-text-pineapple">
                    Breed
                  </h1>
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    {pet.breeds}
                  </h2>
                </span>
              </div>
              <div className="column is-11 is-padding-topless is-padding-bottomless">
                <div className="is-divider" data-content="" />
              </div>
              <div className="column is-12">
                <span className="">
                  <h1 className="title is-size-5 has-text-pineapple">
                    About me
                  </h1>
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    {pet.description}
                  </h2>
                </span>
              </div>
              <div className="column is-12" />
              <div className="column is-12">
                <span className="">
                  <h1 className="title is-size-5 has-text-pineapple">
                    I was found in
                  </h1>
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    {pet.location}
                  </h2>
                </span>
              </div>
              <div className="column is-12" />
              <div className="column is-12" />
              <div className="column is-12" />
              <div className="column is-12">
                <span className="">
                  <h2 className="subtitle is-size-6 has-text-davy-grey">
                    I have {pet.adopted ? 'been adopted.':'not been adopted. Would you like to meet me?'}
                  </h2>
                </span>
              </div>
              <div className="column is-12" />
                { pet.adopted ?
                    null
                    :
                    <div className="column is-12">
                      <button
                        id="adopt-schedule-button"
                        className="button is-rounded has-text-isabelline is-medium v-light-shadow is-malachite-green"
                        onClick={async e => {
                          e.preventDefault()
                          try {
                            await showSchedule({ variables: { schedule: true } })
                          } catch(e) {
                            console.log(e)
                          }
                        }}
                      >
                        Schedule
                      </button>
                    </div>
                }
            </div>
          </div>
        </div>
        <ScheduleForm />
      </section>
    )
  }
}

export default compose(
  graphql(SHOW_SCHEDULE, { name: 'showSchedule' })
)(Pet)
