import React, { Component } from 'react'

// Components 
import Hero from './Hero'
import Value from './Value'
import Social from './Social'
import Footer from './Footer'


class Land extends Component {
	render() {
		return (
			<div>
				<Hero />
				<Value />
				<Social />
			{/*<Donate />*/}
				<Footer />
			</div>
		)
	}
}

export default Land