import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ABOUT, SHOW_CONTACT, SHOW_AUTH } from '../../../graphql/land'

// Assets
import WagsLogo from '../../../assets/images/wagsLogo.svg'


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
		document.removeEventListener('scroll', this.scrollPosition, false)
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
		const { showAbout, showContact, showAuth, history } = this.props

		return (
			<nav
				className={`navbar is-spaced ${scrollBeyond ? 'is-fixed-top is-davy-grey':''}`}
				role="navigation"
				aria-label="main navigation"
			>
			  <div className="navbar-brand">
			    <div className="navbar-item pointer">
						<img
							alt="Wags logo."
							className={`wags-logo ${scrollBeyond ? 'wags-logo-isabelline':'wags-logo-pineapple'}`}
							width={50}
							src={WagsLogo}
						/>
			      <h1 className={`title landing-navbar-title ${scrollBeyond ? 'has-text-isabelline':'has-text-pineapple'}`}>
			      	Wags
			      </h1>
			    </div>

			    <span
			    	role="button"
			    	className={`navbar-burger ${mobile && !scrollBeyond ? 'is-active':''} ${scrollBeyond ? 'is-hidden':''}`}
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
			  <div className={`navbar-menu ${mobile && !scrollBeyond ? 'is-active':''}`}>
			  	<div className="navbar-end">
						<div
							className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'about' ? 'is-active':''} pointer has-text-davy-grey`}
							onMouseEnter={() => this.setState({ item: 'about' })}
							onMouseLeave={() => this.setState({ item: '' })}
							onClick={async e => {
								e.preventDefault()
								try {
									await showAbout({ variables: { about: true } })
								} catch(e) {
					        //TODO: add animation or user-friendly error
									console.log(e)
								}
							}}
						>
							About us
						</div>
						<div
							className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'contact' ? 'is-active':''} pointer has-text-davy-grey`}
							onMouseEnter={() => this.setState({ item: 'contact' })}
							onMouseLeave={() => this.setState({ item: '' })}
							onClick={async e => {
								e.preventDefault()
								try {
									await showContact({ variables: { contact: true } })
								} catch(e) {
						      //TODO: add animation or user-friendly error
									console.log(e)
								}
							}}
						>
							Contact
						</div>
						<div
							className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'adopt' ? 'is-active':''} pointer has-text-davy-grey`}
							onMouseEnter={() => this.setState({ item: 'adopt' })}
							onMouseLeave={() => this.setState({ item: '' })}
							onClick={async e => {
								e.preventDefault()
								history.push('/adopt')
							}}
						>
							Adopt
						</div>
			  		<div
			  			className={`navbar-item is-tab ${scrollBeyond ? 'tab-fixed':''} ${item === 'signup' ? 'is-active':''} pointer has-text-davy-grey`}
			  			onMouseEnter={() => this.setState({ item: 'signup' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
							onClick={async e => {
								e.preventDefault()
								try {
									await showAuth({ variables: { show: true, type: 'signup' } })
								} catch(e) {
						      //TODO: add animation or user-friendly error
									console.log(e)
								}
							}}
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
								${scrollBeyond ? 'landing-donate-fixed':'is-soft-pink has-text-isabelline is-medium'}
								landing-donate-button
								v-light-shadow
							`}
			  			onMouseEnter={() => this.setState({ item: 'donate' })}
			  			onMouseLeave={() => this.setState({ item: '' })}
							onClick={e => {
								e.preventDefault()
								history.push('/donate')
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


export default compose(
	graphql(SHOW_ABOUT, { name: 'showAbout' }),
	graphql(SHOW_CONTACT, { name: 'showContact' }),
	graphql(SHOW_AUTH, { name: 'showAuth' })
)(withRouter(Navbar))
