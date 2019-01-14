
import React, { Component } from 'react'

class Pet extends Component {
	constructor() {
		super()
		this.state = {
			picture: ''
		}
	}

	render() {

    const {picture} = this.state

		return (
    <div
      className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog' ? 'is-overflow-hidden':'badge is-badge-info is-badge-small'}`} data-badge=""
      onMouseEnter={() => {
        this.setState({ picture: 'dog' })
      }}
      onMouseLeave={e => {
        this.setState({ picture: '' })
      }}
    >
    <div className="card-image">
      {picture === 'dog' ?
        <div>
          <div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
          <p className="has-text-pineapple is-size-7 adopt-description">
            {this.props.source.name}
            <br /><br />
            {this.props.source.age}
            <br />
            <br />
            {(this.props.source.breeds).map((breed, index) =>
              <li key = {index}>{breed}</li>
            )
            }
            {this.props.source.description}

            <br />
            <br />
            Greenbelt, MD
          </p>
        </div>
        :
        null
      }
      <figure className="image is-4by3">
        <img src={require(`../../assets/images/1.png`)} className={`is-small-rounded ${picture === 'dog'? 'is-medium-blur':''}`} alt="dog"></img>
      </figure>
      </div>
    </div>
  )};
}

/*
TODO - Need to make it use the picture, for some reason that doesn't work properly
  	src={`localhost:8000/${picturePath}`}
}*/

export default Pet
