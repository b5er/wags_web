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
			    <div className="navbar-item pointer">
			      <h1 className="title has-text-pineapple">
			      	Wags
			      </h1>
			    </div>

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
							className={`navbar-item is-tab ${item === 'about' ? 'is-active':''} pointer has-text-grey`}
							onMouseEnter={() => this.setState({ item: 'about' })}
							onMouseLeave={() => this.setState({ item: '' })}
						>
							About
						</div>
						<div
							className={`navbar-item is-tab ${item === 'contact' ? 'is-active':''} pointer has-text-grey`}
							onMouseEnter={() => this.setState({ item: 'contact' })}
							onMouseLeave={() => this.setState({ item: '' })}
						>
							Contact
						</div>
						<div
							className={`navbar-item is-tab ${item === 'adopt' ? 'is-active':''} pointer has-text-grey`}
							onMouseEnter={() => this.setState({ item: 'adopt' })}
							onMouseLeave={() => this.setState({ item: '' })}
						>
							Adopt
						</div>
			  		<div
			  			className={`navbar-item is-tab ${item === 'signup' ? 'is-active':''} pointer has-text-grey`}
			  			onMouseEnter={() => this.setState({ item: 'signup' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
			  		>
			  			Sign up
			  		</div>
						<div
			  			className={`navbar-item ${item === 'donate' ? 'is-active':''} pointer button is-rounded is-medium is-pineapple has-text-green`}
							style={{ borderColor: '#48435c' }}
			  			onMouseEnter={() => this.setState({ item: 'donate' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
							onClick={e => {
								e.preventDefault()
							}}
			  		>
			  			Donate
			  		</div>
			  	</div>
			  </div>
			</nav>
		)
	}
}


export default Navbar
