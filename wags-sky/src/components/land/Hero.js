import React, { Component } from 'react'

// Components
import Navbar from './Navbar'

class Hero extends Component {
	render() {
		return (
			<section className="hero is-fullheight is-blue">
				<div className="hero-head">
					<Navbar />
				</div>
				<div className="hero-body">
					<div className="container">
						<div className="columns">
							<div className="column is-4 is-offset-1">

								<div className="dog">

									<div className="dog-body">
										<div className="dog-tail">
											<div className="dog-tail">
												<div className="dog-tail">
													<div className="dog-tail">
														<div className="dog-tail">
															<div className="dog-tail">
																<div className="dog-tail">
																	<div className="dog-tail" />
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>

									<div className="dog-torso" />
									<div className="dog-head">
										<div className="dog-ears">
											<div className="dog-ear" />
											<div className="dog-ear" />
										</div>
										<div className="dog-eyes">
											<div className="dog-eye" />
											<div className="dog-eye" />
										</div>
										<div className="dog-muzzle">
											<div className="dog-tongue" />
										</div>
									</div>

									<div className="ball" tabIndex="0" />
								</div>

							</div>
							<div className="column is-6">
								<h1 className="title">
									Where furry friends are made.
								</h1>
								<button>
									<p>Get started</p>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default Hero
