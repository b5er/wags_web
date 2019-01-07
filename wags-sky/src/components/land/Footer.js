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
	                                <h3 className="has-text-ceil">Adoption</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link className="has-text-blue" to='/'>Compare features</Link></li>
	                                <li><Link className="has-text-blue" to='/'>Our Roadmap</Link></li>
	                                <li><Link className="has-text-blue" to='/'>Request features</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Team</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link className="has-text-blue" to='/'>Get Started</Link></li>
	                                <li><Link className="has-text-blue" to='/'>User guides</Link></li>
	                                <li><Link className="has-text-blue" to='/'>Admin guide</Link></li>
	                                <li><Link className="has-text-blue" to='/'>Developers</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Media</h3>
	                            </div>
	                            <ul className="link-list">
	                                <li><Link className="has-text-blue" to='/'>Latest News</Link></li>
																	<li><Link className="has-text-blue" to='/'>Events</Link></li>
	                                <li><Link className="has-text-blue" to='/'>Blog</Link></li>
	                            </ul>
	                        </div>
	                    </div>
	                    <div className="column">
	                        <div className="footer-column">
	                            <div className="footer-header">
	                                <h3 className="has-text-ceil">Follow Us</h3>
	                                <nav className="level is-mobile">
	                                    <div className="level-left">
	                                        <a className="level-item" href="https://github.com/#">
	                                            <span className="icon has-text-blue"><i className="fab fa-github-square fa-lg" /></span>
	                                        </a>
	                                        <a className="level-item" href="https://dribbble.com/#">
	                                            <span className="icon has-text-blue"><i className="fab fa-dribbble-square fa-lg" /></span>
	                                        </a>
	                                        <a className="level-item" href="https://fb.com/#">
	                                            <span className="icon has-text-blue"><i className="fab fa-facebook-square fa-lg" /></span>
	                                        </a>
	                                        <a className="level-item" href="https://twitter.com/#">
	                                            <span className="icon has-text-blue"><i className="fab fa-twitter-square fa-lg" /></span>
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
