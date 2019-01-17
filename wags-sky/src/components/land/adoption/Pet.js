import React, { Component } from 'react'

class Pet extends Component {
	constructor() {
		super()
		this.state = {
			picture: ''
		}
	}

	render() {

    const { picture } = this.state
    const { source } = this.props
		
    return (
    <div
      className={`card is-small-rounded pointer v-light-shadow ${picture === 'active' ? 'is-overflow-hidden':'badge is-badge-info is-badge-small'}`} 
      data-badge=""
      onMouseEnter={() => {
        this.setState({ picture: 'active' })
      }}
      onMouseLeave={e => {
        this.setState({ picture: '' })
      }}
    >
    <div className="card-image">
      {picture === 'active' ?
        <div>
          <div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
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
          src={`http://localhost:8000/${source.petImage}`} 
          className={`is-small-rounded ${picture === 'dog'? 'is-medium-blur':''}`} 
          alt="Pets for adoption." 
        />
      </figure>
      </div>
    </div>
  )};
}

export default Pet
