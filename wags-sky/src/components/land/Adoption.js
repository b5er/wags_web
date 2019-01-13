import React, { Component } from 'react'
import axios from 'axios'
import Pet from './Pet'

import Test from '../../assets/images/1.png'

class Adoption extends Component {
	constructor() {
		super()
		this.state = {
			pets: {},
			picture: ''
		}
		this.getImages = this.getImages.bind(this);
	}



	getImages() {
    axios.get("http://localhost:8000/api/petQuery/findAll")
    .then(response =>
			{
			  //console.log(response.data)
			  this.setState({pets : response.data})
			}
    )
	}


	componentDidMount() {
		window.addEventListener('load', this.getImages())
	}


	render() {
		const { pets, picture} = this.state

		function newCard(name, age, picturePath){
			return (
					<div className="column is-2">
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
										name
										<br /><br />
										age
										<br />
										Greenbelt, MD
									</p>
								</div>
								:
								null
							}
							<figure className="image is-4by3">
							<img className={`is-small-rounded ${picture === 'dog'? 'is-medium-blur':''}`} src={Test} alt="dog" />
							{/* Why does give me a compile error???
								<img className={`is-small-rounded ${picture === 'dog'? 'is-medium-blur':''}`} src={require(`localhost:8000/${picturePath}`)} alt="dog" />*/
							}
							</figure>
						</div>
					</div>
				</div>
			);
		}

		return (
			<section className="section is-ceil">
				<h1 className="title is-size-1 has-text-centered has-text-isabelline">
					You can have success too!
				</h1>
				<br />
				<div className="columns">
					<div className="column is-offset-2">
							<h3 className="title is-size-3 has-text-pineapple">
								Adopt your best friend.
							</h3>
					</div>
					<div className="column is-2">
						<div className="control has-icons-left has-icons-right">
							<input className="input is-rounded" type="text" placeholder="Search" />
							<span className="icon is-small is-left">
								<i className="fas fa-search" />
							</span>
						</div>
					</div>
					<div className="column is-2" />
				</div>
				<div className="columns is-multiline is-centered">
					<div className="column is-2" />

					{
						/*Put something here that will create the following:

					(1) - A div for the column
					(2) - A div for the card image - will fetch url from api call
					(3) - A figure for the image*/
				  }

					{
						Object.keys(pets).forEach(function(key) {
						    console.log(pets[key])
								return newCard(pets[key].name, pets[key].age, pets[key].petImage)
						})
				  }

				</div>
			</section>
		)
	}
}


export default Adoption
