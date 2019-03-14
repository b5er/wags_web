import React, { Component } from 'react'

// Assets
import FallbackPic from '../../../assets/images/fallbackPic.jpg'


class Pet extends Component {
	constructor() {
		super()
		this.state = {
			hoverPicture: false
		}
	}

	checkTimeHrs = source => {
		if (!source || !source.createdAt)
			return false
		const createdDate = new Date(source.createdAt)
		const today = new Date()
		const hours = (((today.getTime() - createdDate.getTime()) / 1000) / 3600)

		return hours <= 24
	}

	render() {

    const { hoverPicture } = this.state
    const { source, source: { name, age, breeds, description, location, petImage }, MAX_TEXT_LENGTH } = this.props

    return (
			<div
				className={`${ !hoverPicture && this.checkTimeHrs(source) ? 'badge is-badge-info is-badge-small':'is-overflow-hidden' }`}
				data-badge=""
			>
		    <div
		      className="card is-small-rounded pointer light-shadow"
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
									Name: { name && name.length <= MAX_TEXT_LENGTH - 6 ?
											name
											:
											`${name ? name.substring(0, MAX_TEXT_LENGTH - 6):''}...`
									}
			            <br />
			            Age: { age }
			            <br />
			            Breed: { breeds ?
				              breeds.map((breed, key) => {
				                return (
				                  <span key={key}>
				                    { breed && breed.length <= MAX_TEXT_LENGTH - 7 ?
																breed
																:
																`${breed ? breed.substring(0, MAX_TEXT_LENGTH - 7):''}...`
														}
				                  </span>
				                )
				              })
											:
											'...'
			            }
									<br />
			            About me: { description && description.length <= MAX_TEXT_LENGTH - 10 ?
											description
											:
											`${description ? description.substring(0, MAX_TEXT_LENGTH - 10):''}...`
									}
			            <br />
									<br />
			            I was found in { location && location.length <= MAX_TEXT_LENGTH ?
											location
											:
											`${location ? location.substring(0, MAX_TEXT_LENGTH):''}...`
									}
			          </p>
			        </div>
			        :
			        null
			      }
			      <figure className="image is-4by3">
			        <img
								id={name}
			          src={`https://storage.googleapis.com/${process.env.REACT_APP_GOOGLE_BUCKET_NAME}/${petImage}`}
			          className={`is-small-rounded ${ hoverPicture ? 'is-medium-blur':'' }`}
			          alt="Pets for adoption."
								onError={e => {
									e.target.src = FallbackPic
								}}
			        />
			      </figure>
		      </div>
		    </div>
			</div>
  	)
	}
}

export default Pet
