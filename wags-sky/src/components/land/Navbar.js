import React, { Component } from 'react'

class Navbar extends Component {
	constructor() {
		super()
		this.state = {
			item: '',
			mobile: false
		}
	}

	render() {

		const { item, mobile } = this.state

		return (
			<nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
			  <div className="navbar-brand">
			    <a className="navbar-item" href="https://bulma.io">
			      <h1 className="title">
			      	Wags
			      </h1>
			    </a>

			    <span 
			    	role="button" 
			    	className={`navbar-burger ${mobile ? 'is-active':''}`} 
			    	aria-label="menu" 
			    	aria-expanded="false"
			    	onClick={e => {
			    		this.setState({ mobile: !mobile })
			    	}}
			    >
			      <span aria-hidden="true" />
			      <span aria-hidden="true" />
			      <span aria-hidden="true" />
			    </span>
			  </div>
			  <div className="navbar-menu">
			  	<div className="navbar-end">
			  		<div 
			  			className={`navbar-item is-tab ${item === 'donate' ? 'is-active':''}`}
			  			onMouseEnter={() => this.setState({ item: 'donate' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
			  		>
			  			Donate
			  		</div>
			  		<div 
			  			className={`navbar-item is-tab ${item === 'signup' ? 'is-active':''}`}
			  			onMouseEnter={() => this.setState({ item: 'signup' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
			  		>
			  			Sign up
			  		</div>
			  	</div>
			  </div>
			</nav>
		)
	}
}


export default Navbar