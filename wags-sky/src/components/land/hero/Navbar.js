import React, { Component } from 'react'

class Navbar extends Component {
	constructor() {
		super()
		this.state = {
			item: '',
			mobile: false,
			scrollBeyond: false
		}
	}

	componentDidMount() {
		document.addEventListener('scroll', this.scrollPosition, false)
	}

	componentWillUnmount() {
		document.addEventListener('scroll', this.scrollPosition, false)
	}

	scrollPosition = () => {
		if(window.pageYOffset === 0) {
			this.setState({ scrollBeyond: false })
		} else if(window.pageYOffset > 150 && !this.state.scrollBeyond) {
			this.setState({ scrollBeyond: true })
		}
	}

	render() {

		const { item, mobile, scrollBeyond } = this.state

		return (
			<nav
				className={`navbar is-spaced ${scrollBeyond ? 'is-fixed-top is-grey':''}`}
				role="navigation"
				aria-label="main navigation"
			>
			  <div className="navbar-brand">
			    <div className="navbar-item pointer">
			      <h1 className={`title ${scrollBeyond ? 'has-text-isabelline':'has-text-pineapple'}`}>
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
			  <div className={`navbar-menu ${mobile ? 'is-active':''}`}>
			  	<div className="navbar-end">
						<div
							className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'about' ? 'is-active':''} pointer has-text-grey`}
							onMouseEnter={() => this.setState({ item: 'about' })}
							onMouseLeave={() => this.setState({ item: '' })}
						>
							About us
						</div>
						<div
							className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'contact' ? 'is-active':''} pointer has-text-grey`}
							onMouseEnter={() => this.setState({ item: 'contact' })}
							onMouseLeave={() => this.setState({ item: '' })}
						>
							Contact
						</div>
						<div
							className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'adopt' ? 'is-active':''} pointer has-text-grey`}
							onMouseEnter={() => this.setState({ item: 'adopt' })}
							onMouseLeave={() => this.setState({ item: '' })}
						>
							Adopt
						</div>
			  		<div
			  			className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'signup' ? 'is-active':''} pointer has-text-grey`}
			  			onMouseEnter={() => this.setState({ item: 'signup' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
			  		>
			  			Sign up
			  		</div>
						<div className="navbar-item" />
						<div
			  			className={`
								navbar-item ${item === 'donate' ? 'is-active':''}
								pointer
								button
								is-rounded
								${scrollBeyond ? 'donate-fixed':'is-pineapple has-text-green is-medium'}
								donate-button
								v-light-shadow
							`}
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
