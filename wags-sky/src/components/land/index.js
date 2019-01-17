import React, { Component } from 'react'

// Components
import Hero from './hero'
import Value from './Value'
import Social from './Social'
import Adoption from './adoption'
import Donate from './Donate'
import Footer from './Footer'


class Land extends Component {
	render() {
		return (
			<div className="is-ceil">
				<Hero />
				<Value />
				<Social />
				<Adoption />
			  <Donate />
				<Footer />
			</div>
		)
	}
}

export default Land
