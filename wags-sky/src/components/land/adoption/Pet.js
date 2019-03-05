import React, { Component } from 'react'

class Pet extends Component {
	constructor() {
		super()
		this.state = {
			hoverPicture: false
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
		// In case DB error, by default it will not show green notification dot.
		return 25
	}

	render() {

    const { hoverPicture } = this.state
    const { source, source: { name, age, breeds, description, petImage } } = this.props
		const MAX_TEXT_LENGTH = 30

    return (
			<div
				className={`${ !hoverPicture && this.checkTimeHrs(source) <= 24 && this.checkTimeHrs(source) > 0 ? 'badge is-badge-info is-badge-small':'is-overflow-hidden' }`}
				data-badge=""
			>
		    <div
		      className="card is-small-rounded pointer v-light-shadow"
		      onMouseEnter={() => {
		        this.setState({ hoverPicture: true })
		      }}
		      onMouseLeave={() => {
		        this.setState({ hoverPicture: false })
		      }}
		    >
			    <div className="card-image">
			      { hoverPicture ?
			        <div>
			          <div className="card is-small-rounded adopt-img-overlay adopt-img-fadein" />
			          <p className="has-text-pineapple is-size-7 adopt-description">
									Name: { name.length <= MAX_TEXT_LENGTH - 6 ?
											name
											:
											`${name.substring(0, MAX_TEXT_LENGTH - 6)}...`
									}
			            <br />
			            Age: { age }
			            <br />
			            Breed: {
			              (breeds).map((breed, key) => {
			                return (
			                  <span key={key}>
			                    { breed.length <= MAX_TEXT_LENGTH - 7 ?
															breed
															:
															`${breed.substring(0, MAX_TEXT_LENGTH - 7)}...`
													}
			                  </span>
			                )
			              })
			            }
									<br />
			            About me: { description.length <= MAX_TEXT_LENGTH - 10 ?
											description
											:
											`${description.substring(0, MAX_TEXT_LENGTH - 10)}...`
									}
			            <br />
									<br />
			            Found: {`Greenbelt, MD`}
			          </p>
			        </div>
			        :
			        null
			      }
			      <figure className="image is-4by3">
			        <img
			          src={`http://localhost:8000/${ petImage }`}
			          className={`is-small-rounded ${ hoverPicture ? 'is-medium-blur':'' }`}
			          alt="Pets for adoption."
			        />
			      </figure>
		      </div>
		    </div>
			</div>
  	)
	}
}

export default Pet
