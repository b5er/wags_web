import React, { Component } from 'react'

// Components
import personOne from '../../assets/images/1.png'
import personTwo from '../../assets/images/2.png'
import personThree from '../../assets/images/3.png'


class Social extends Component {
	render() {
		return (
			<section className="section is-medium is-ceil">
				<h1 className="title has-text-centered">
					Owners
				</h1>
				<div className="columns is-centered">
					<div className="column is-2">
						<div className="box">
							<p>
									Iterport app has helped my roommates
									and I schedule who will use my car,
									for how long and how much. Love the
									app design, practically and making
									some money helps too.
							</p>
							<figure className="image is-128x128" style={{ margin: '2em 3em' }}>
								<img className="is-rounded" src={personOne} alt="" />
							</figure>
							<div className="has-text-centered">
								<h5>Irma Walters</h5>
								<span>Dog Owner</span>
							</div>
						</div>
					</div>
					<div className="column is-1" />
					<div className="column is-2">
						<div className="box">
							<p>
									Iterport app has helped my roommates
									and I schedule who will use my car,
									for how long and how much. Love the
									app design, practically and making
									some money helps too.
							</p>
							<figure className="image is-128x128" style={{ margin: '2em 2em' }}>
								<img className="is-rounded" src={personTwo} alt="" />
							</figure>
							<div className="has-text-centered">
								<h5>Irma Walters</h5>
								<span>Dog Owner</span>
							</div>
						</div>
					</div>
					<div className="column is-1" />
					<div className="column is-2">
						<div className="box">
							<p>
									Iterport app has helped my roommates
									and I schedule who will use my car,
									for how long and how much. Love the
									app design, practically and making
									some money helps too.
							</p>
							<figure className="image is-128x128" style={{ margin: '2em 2em' }}>
								<img className="is-rounded" src={personThree} alt="" />
							</figure>
							<div className="has-text-centered">
								<h5>Irma Walters</h5>
								<span>Dog Owner</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Social
