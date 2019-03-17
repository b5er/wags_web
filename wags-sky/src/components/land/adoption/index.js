import React, { Component } from 'react'

// Components
import Pet from './Pet'
import Cat from './Cat'

// utils
import { fetchPets } from '../../../utils/petAPI'


class Adoption extends Component {

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
			const stop = 12
			const pets = await fetchPets(stop)
			this.setState({ loading: false, pets })
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
													Try checking back later.
												</p>
											</div>)
											:
											(pets.map((source, key) => {
												if (!source)
													return null

												return (
													<div key={key} className="column is-3">
														<Pet MAX_TEXT_LENGTH={30} source={source} />
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
