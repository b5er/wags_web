import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// Apollo
import { compose, graphql } from 'react-apollo'
import { SHOW_ABOUT, SHOW_CONTACT } from '../../graphql/land'


class Footer extends Component {
	render() {

		const { showAbout, showContact } = this.props

		return (
			<footer className="footer is-pineapple">
	            <div className="container">
	                <div className="columns">
	                    <div className="column">
	                        <div className="footer-logo">
	                            {/*<img src={Logo} alt="footer-logo" />*/}
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Organization</h3>
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
																		<span className="has-text-blue footer-item pointer">
																			About us
																		</span>
																	</li>
	                                <li>
																		<Link className="has-text-blue footer-item" to='/'>
																			Adopt
																		</Link>
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
																		<span className="has-text-blue footer-item pointer">
																			Contact
																		</span>
																	</li>
																	<li>
																		<Link className="has-text-blue footer-item" to='/donate'>
																			Donate
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Team</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li>
																		<Link className="has-text-blue footer-item" to='/'>
																			Developers
																		</Link>
																	</li>
																	<li>
																		<Link className="has-text-blue footer-item" to='/'>
																			Request features
																		</Link>
																	</li>
																	<li>
																		<Link className="has-text-blue footer-item" to='/'>
																			Volunteers
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Media</h3>
	                            </div>
	                            <ul className="link-list">
																	<li>
																		<Link className="has-text-blue footer-item" to='/'>
																			Blog
																		</Link>
																	</li>
	                                <li>
																		<Link className="has-text-blue footer-item" to='/'>
																			Events
																		</Link>
																	</li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Follow Us</h3>
	                                <nav className="level is-mobile">
	                                    <div className="level-left">
	                                        <a
																						className="level-item"
																						href="https://www.facebook.com/WAGS-Greenbelt-MD-519196931590002/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-blue footer-item" target="_blank">
																								<i className="fab fa-facebook-square fa-lg" />
																							</span>
	                                        </a>
	                                        <a
																						className="level-item"
																						href="https://twitter.com/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-blue footer-item">
																								<i className="fab fa-twitter-square fa-lg" />
																							</span>
	                                        </a>
																					<a
																						className="level-item"
																						href="https://github.com/love-wags"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-blue footer-item">
																								<i className="fab fa-github-square fa-lg" />
																							</span>
	                                        </a>
																					<a
																						className="level-item"
																						href="https://dribbble.com/"
																						target="_blank"
																						rel="noopener noreferrer"
																					>
	                                            <span className="icon has-text-blue footer-item">
																								<i className="fab fa-dribbble-square fa-lg" />
																							</span>
	                                        </a>
	                                    </div>
	                                </nav>
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
