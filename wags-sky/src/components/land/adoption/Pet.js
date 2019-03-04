import React, { Component } from 'react'

class Pet extends Component {
	constructor() {
		super()
		this.state = {
			picture: ''
		}
	}

	checkTimeHrs = item => {
		if (item.created) {
			const createdDate = new Date(item.created)
			const today = new Date()
			/*Time is returned in ms in getTime(), so get the difference
			and divide by 1000 ms to get seconds and 60 twice to get hours*/
			return ((today.getTime() - createdDate.getTime()) / 1000) / (60 * 60)
		}
		// This is case something happens with the database. By the fault it will not show green notification dot.
		return 1
	}

	render() {

    const { picture } = this.state
    const { source } = this.props

    return (
    <div
			//TODO - Add the green button to 'isoverflow-hidden' attribute when fixed jittering: (badge is-badge-info is-badge-small)
      className={`card is-small-rounded pointer v-light-shadow ${ this.checkTimeHrs(source) >= 24 ? 'is-overflow-hidden': 'badge is-badge-info is-badge-small' }`}
      data-badge=""
      onMouseEnter={() => {
        this.setState({ picture: 'active' })
      }}
      onMouseLeave={e => {
        this.setState({ picture: '' })
      }}
    >
    <div className="card-image">
      { picture === 'active' ?
        <div>
          <div className="card is-small-rounded adopt-img-overlay adopt-img-fadein" />
          <p className="has-text-pineapple is-size-7 adopt-description">
            { source.name }
            <br />
            <br />
            { source.age }
            <br />
            <br />
            {
              (source.breeds).map((breed, key) => {
                return (
                  <li key={key}>
                    { breed }
                  </li>
                )
              })
            }
            { source.description }
            <br />
            <br />
            Greenbelt, MD
          </p>
        </div>
        :
        null
      }
      <figure className="image is-4by3">
        <img
          src={`http://localhost:8000/${ source.petImage }`}
          className={`is-small-rounded ${ picture === 'dog'? 'is-medium-blur':'' }`}
          alt="Pets for adoption."
        />
      </figure>
      </div>
    </div>
  )};
}

export default Pet
