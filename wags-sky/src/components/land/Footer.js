import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
	render() {
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
																	<li><Link className="has-text-blue footer-item" to='/'>About us</Link></li>
	                                <li><Link className="has-text-blue footer-item" to='/'>Adopt</Link></li>
																	<li><Link className="has-text-blue footer-item" to='/'>Donate</Link></li>
																	<li><Link className="has-text-blue footer-item" to='/'>Contact</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Team</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link className="has-text-blue footer-item" to='/'>Developers</Link></li>
																	<li><Link className="has-text-blue footer-item" to='/'>Request features</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Media</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link className="has-text-blue footer-item" to='/'>Latest news</Link></li>
																	<li><Link className="has-text-blue footer-item" to='/'>Events</Link></li>
	                                <li><Link className="has-text-blue footer-item" to='/'>Blog</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Follow Us</h3>
	                                <nav className="level is-mobile">
	                                    <div className="level-left">
	                                        <a className="level-item" href="https://www.facebook.com/WAGS-Greenbelt-MD-519196931590002/">
	                                            <span className="icon has-text-blue footer-item">
																								<i className="fab fa-facebook-square fa-lg" />
																							</span>
	                                        </a>
	                                        <a className="level-item" href="https://twitter.com/">
	                                            <span className="icon has-text-blue footer-item">
																								<i className="fab fa-twitter-square fa-lg" />
																							</span>
	                                        </a>
																					<a className="level-item" href="https://github.com/b5er">
	                                            <span className="icon has-text-blue footer-item">
																								<i className="fab fa-github-square fa-lg" />
																							</span>
	                                        </a>
																					<a className="level-item" href="https://dribbble.com/">
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


export default Footer
