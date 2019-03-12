import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ABOUT, SHOW_CONTACT } from '../../graphql/land'

// Assets
import WagsLogo from '../../assets/images/wagsLogo.svg'


class Footer extends Component {
	render() {

		const { showAbout, showContact } = this.props

		return (
			<footer className="footer is-pineapple">
	            <div className="container">
	                <div className="columns">
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">
																		Organization
																	</h3>
	                            </div>
	                            <ul className="link-list">
																	<li
																		onClick={async e => {
																			e.preventDefault()
																			try {
																				await showAbout({ variables: { about: true } })
																			} catch(e) {
																				console.log(e)
																			}
																		}}
																	>
																		<span className="has-text-columbia-blue footer-item pointer">
																			About us
																		</span>
																	</li>
																	<li>
																		<Link className="has-text-columbia-blue footer-item" to='/'>
																			Volunteers
																		</Link>
																	</li>
	                                <li>
																		<Link className="has-text-columbia-blue footer-item" to='/adopt'>
																			Adopt
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">
																		Developers
																	</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li>
																		<Link className="has-text-columbia-blue footer-item" to='/'>
																			Team
																		</Link>
																	</li>
																	<li>
																		<Link className="has-text-columbia-blue footer-item" to='/'>
																			Request feature
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
											<div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">
																		Resources
																	</h3>
	                            </div>
	                            <ul className="link-list">
																	<li>
																		<a
																			className="has-text-columbia-blue footer-item"
																			href="https://app.termly.io/document/privacy-policy/6aedf1c0-b262-42d8-a507-72abe96e6ec5"
											                target="_blank"
											                rel="noopener noreferrer"
																		>
																			Privacy policy
																		</a>
																	</li>
																	<li
																		onClick={async e => {
																			e.preventDefault()
																			try {
																				await showContact({ variables: { contact: true } })
																			} catch(e) {
																				console.log(e)
																			}
																		}}
																	>
																		<span className="has-text-columbia-blue footer-item pointer">
																			Contact
																		</span>
																	</li>
																	<li>
																		<Link className="has-text-columbia-blue footer-item" to='/donate'>
																			Donate
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">
																		Media
																	</h3>
	                            </div>
	                            <ul className="link-list">
																	<li>
																		<Link className="has-text-columbia-blue footer-item" to='/'>
																			Blog
																		</Link>
																	</li>
	                                <li>
																		<Link className="has-text-columbia-blue footer-item" to='/'>
																			Events
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">
																		Follow us
																	</h3>
	                                <nav className="level is-mobile">
	                                    <div className="level-left">
	                                        <a
																						className="level-item"
																						href="https://www.facebook.com/WAGS-Greenbelt-MD-519196931590002/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-columbia-blue footer-item" target="_blank">
																								<i className="fab fa-facebook-square fa-lg" />
																							</span>
	                                        </a>
	                                        <a
																						className="level-item"
																						href="https://twitter.com/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-columbia-blue footer-item">
																								<i className="fab fa-twitter-square fa-lg" />
																							</span>
	                                        </a>
																					<a
																						className="level-item"
																						href="https://github.com/love-wags"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-columbia-blue footer-item">
																								<i className="fab fa-github-square fa-lg" />
																							</span>
	                                        </a>
																					<a
																						className="level-item"
																						href="https://dribbble.com/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-columbia-blue footer-item">
																								<i className="fab fa-dribbble-square fa-lg" />
																							</span>
	                                        </a>
	                                    </div>
	                                </nav>
																	<p className="has-text-columbia-blue">
																		<img alt="Wags logo." className="wags-logo-isabelline wags-logo-footer" width={40} src={WagsLogo} /> &copy; Wags
																	</p>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </footer>
		)
	}
}


export default compose(
	graphql(SHOW_ABOUT, { name: 'showAbout' }),
	graphql(SHOW_CONTACT, { name: 'showContact' })
)(Footer)
