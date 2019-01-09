import React, { Component } from 'react'

// Components
import Navbar from './Navbar'
import Dog from './Dog'

import Couch from '../../../assets/images/couch.svg'

class Hero extends Component {
	render() {
		return (
			<section className="hero is-fullheight is-blue">
				<div className="hero-head">
					<Navbar />
				</div>
				<div className="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column is-3 is-offset-1">
								<Dog />
							</div>
							<div className="column is-8">
								<div className="columns is-multiline">
									<div className="column is-12">
                    <figure className="image">
                      <img src={Couch} alt="couch" />
                    </figure>
									</div>
									<div className="column is-12 has-text-centered">
										<h1 className="title is-size-1 fadein has-text-pineapple">
											Where furry friends are made.
										</h1>
										<button
											className="button is-green is-large is-rounded fadein light-shadow has-text-pineapple"
											style={{ borderColor: '#61e786' }}
											onClick={e => {
												e.preventDefault()
											}}
										>
											<p>Get started</p>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default Hero