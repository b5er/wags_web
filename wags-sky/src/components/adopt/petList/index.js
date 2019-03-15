import React, { Component } from 'react'

// Components
import Cat from './Cat'
import Pet from './Pet'
import Signup from '../../land/auth'

// utils
import { fetchPets } from '../../../utils/petAPI'

class PetList extends Component {

  constructor() {
    super()
    this.state = {
      pets: []
    }
  }

  componentDidMount() {
    document.addEventListener('load', this.getImages())
  }

  componentWillUnmount() {
    document.removeEventListener('load', this.getImages)
  }

  getImages = async () => {
    try {
      const pets = await fetchPets()
      this.setState({ pets })
    } catch (e) {
      console.log(e)
    }
  }

  render() {

    const { pets } = this.state

    return (
      <div>
        <div className="section">
          <div className="box is-columbia-blue light-shadow">
              <div className="field has-addons">
                  <div className="control is-expanded">
                      <input className="input has-text-centered" placeholder="e.g. Pebbles" />
                  </div>
                  <div className="control">
                      <span className="button is-link">
                        Search
                      </span>
                  </div>
              </div>
          </div>
        </div>
        <div className="columns">
          <div className="column is-1" />
          <div className="column is-10">
            <div className={`columns is-multiline ${!pets || pets.length === 0 ? 'is-centered':''}`}>
              { !pets || pets.length === 0 ?
                  (<div className="column is-6 has-text-centered">
                    <Cat />
                    <p className="is-size-5 has-text-pineapple">
                      Well, that's embarassing...
                    </p>
                    <p className="has-text-pineapple">
                      I don't have pets to show you, right now!
                    </p>
                    <p className="has-text-pineapple">
                      Check back later.
                    </p>
                  </div>)
                  :
                  (pets.map((source, key) => {
                    if (!source)
                      return null

                    return (
                      <div key={key} className="column is-4">
                        <Pet MAX_TEXT_LENGTH={30} source={source} />
                      </div>
                    )
                  }))
              }
            </div>
          </div>
        </div>
        <Signup />
      </div>
    )
  }
}

export default PetList
