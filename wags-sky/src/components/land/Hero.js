import React, { Component } from 'react'

// Components
import Navbar from './Navbar'

class Hero extends Component {
	render() {
		return (
			<section className="hero is-fullheight is-blue">
				<div className="hero-head">
					<Navbar />
				</div>	
				<div className="hero-body">
					<div className="container">
						<h1 className="title">
							FES
						</h1>
						<h2 className="subtitle">
							ses
						</h2>
					</div>		
				</div>
			</section>
		)
	}
}


export default Hero