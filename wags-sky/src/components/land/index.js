import React, { Component } from 'react'

// Components
import Hero from './hero'
import Value from './Value'
import Social from './Social'
import Adoption from './adoption'
import Donation from './donation'
import Footer from './Footer'

import About from './About'
import Contact from './Contact'
import Auth from './Auth'


class Land extends Component {
	render() {
		return (
			<div className="is-ceil">

				<Hero />
				<Value />
				<Social />
				<Adoption />
			  <Donation />
				<Footer />

				{/* Modals triggered by components above */}
				<About />
				<Contact />
				<Auth />

			</div>
		)
	}
}

export default Land
