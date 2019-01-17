import React, { Component } from 'react'
import Pet from './Pet'

class Adoption extends Component {
	constructor() {
		super()
		this.state = {
			pets: [], 
			loading: true
		}
	}

	componentDidMount() {
		window.addEventListener('load', this.getImages())
	}

	getImages = async () => {
		try {
			const images = await fetch('http://localhost:8000/api/petQuery/findAll')
	    	
	    	if(!images.ok)
	    		console.error('Unable to fetch pet images.')
	    	
	    	const pets = await images.json()
	    	
	    	this.setState({ loading: false })
	    	this.setState({ pets })
	    } catch(e) {
	    	console.log(e)
	    }
	}

	render() {

		const { pets, loading } = this.state

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
				<div className="container">
					<div className="columns is-centered">
					<div className="column is-10">
							<div className="box is-ceil">
								<div className="columns is-multiline">
									{!loading ? 
										pets.map((petImg, key) => {
											return ( 
												<div key={key} className="column is-3">
													<Pet source={petImg} />
												</div>
											)
										})
										: 
										null // Todo: Make cards blurry with no dogs (i.e. slack when loading)
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default Adoption
