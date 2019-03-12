import React, { Component } from 'react'

// Components
import Pet from './Pet'
import Cat from './Cat'


class Adoption extends Component {
	constructor() {
		super()
		this.state = {
			pets: []
		}
	}

	componentDidMount() {
		window.addEventListener('load', this.getImages())
	}

	componentWillUnmount() {
		window.removeEventListener('load', this.getImages())
	}

	getImages = async () => {
		try {
			const images = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/pet`)

	    if(!images.ok) {
	    	console.error('Unable to fetch pet images.')
				return
			}

	    const { pets } = await images.json()
			const stop = 12
			let previewPets = []
			for (let i = 0; i < stop; i++)
				previewPets.push(pets[i])
			this.setState({ loading: false, pets: previewPets })
	  } catch(e) {
	  	console.log(e)
	  }
	}

	render() {

		const { pets } = this.state

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
								<div className={`columns is-multiline ${pets.length === 0 ? 'is-centered':''}`}>
									{ pets.length === 0 ?
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
											(pets.map((petImage, key) => {
												return (
													<div key={key} className="column is-3">
														<Pet source={petImage} />
													</div>
												)
											}))
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
