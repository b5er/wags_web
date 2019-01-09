import React, { Component } from 'react'


class Value extends Component {
	render() {
		return (
			<section className="section is-medium is-ceil">
				<div className="columns">
					<div className="column is-7">
						<h1 className="title is-size-2 has-text-centered has-text-isabelline">
							Be their hero
							<br />
							make your home their home
						</h1>
						<br />
					</div>
					<div className="column">

						<div className="columns is-multiline">
							<div className="column is-1">
								<div className="card is-ceil" style={{ borderRadius: '50%', width: '50em', height: '3em' }}>
									<div className="card-body">
										<i className="far fa-calendar-check fa-lg has-text-pineapple" style={{ padding: '1rem .82rem' }} />
									</div>
								</div>
							</div>
							<div className="column is-3">
								<p className="has-text-isabelline">
									Make appointment
								</p>
								<p className="is-size-7 has-text-isabelline">
									Balhfdafe
								</p>
							</div>
							<div className="column is-8" />
							<div className="column is-1">
								<div className="card is-ceil" style={{ borderRadius: '50%', width: '50em', height: '3em' }}>
									<div className="card-body">
										<i className="far fa-paper-plane fa-lg has-text-pineapple" style={{ padding: '1rem .7rem' }} />
									</div>
								</div>
							</div>
							<div className="column is-3">
								<p className="has-text-isabelline">
									Simple paperwork
								</p>
								<p className="is-size-7 has-text-isabelline">
									Balhfdafe
								</p>
							</div>
							<div className="column is-8" />
							<div className="column is-1">
								<div className="card is-ceil" style={{ borderRadius: '50%', width: '50em', height: '3em' }}>
									<div className="card-body">
										<i className="fas fa-syringe fa-lg has-text-pineapple" style={{ padding: '1rem .7rem' }} />
									</div>
								</div>
							</div>
							<div className="column is-2">
								<p className="has-text-isabelline">
									Free vaccines
								</p>
								<p className="is-size-7 has-text-isabelline">
									Balhfdafefdssssssssssssssss
								</p>
							</div>
						</div>

					</div>
				</div>
			</section>
		)
	}
}

export default Value
