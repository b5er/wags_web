import React, { Component } from 'react'
import axios from 'axios'
import Pet from './Pet'

class Adoption extends Component {
	constructor() {
		super()
		this.state = {
			pets: []
		}
		this.getImages = this.getImages.bind(this);
	}

	getImages() {
    axios.get("http://localhost:8000/api/petQuery/findAll")
    .then(response =>
			{
			  this.setState({pets : response.data})
			}
    )
	}


	componentDidMount() {
		window.addEventListener('load', this.getImages())
	}


	render() {
		const { pets } = this.state

		console.log(pets)

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

					{/*<img src={Test} className={`is-small-rounded`} alt="ah"></img>*/}

					{
						/*Put something here that will create the following:

					(1) - A div for the column
					(2) - A div for the card image - will fetch url from api call
					(3) - A figure for the image*/
				  }

  				<div className="column is-2">
						{
							Object.entries(pets).map(([key, value]) => (
									<Pet key={key} source = {value} />
							))
					  }
					</div>


				</div>
			</section>
		)
	}
}


export default Adoption
