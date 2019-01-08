import React, { Component } from 'react'


class Value extends Component {
	render() {
		return (
			<section className="section is-large is-ceil">
				<h1 className="title is-size-2 has-text-centered" style={{ color: '#E2E8DD' }}>
					Make Your Home A Better Place
				</h1>
				<br />
				<div className="columns has-text-centered">
					<div className="column is-2 is-offset-2">
						<div className="card is-large-rounded med-shadow is-pineapple" style={{ margin: '1em' }}>
							<div className="card-body">
								<i className="far fa-hand-paper fa-4x icon-padding has-text-green" />
							</div>
						</div>
						<br />
						<p className="subtitle has-text-white">
							No kill shelter.
						</p>
					</div>
					<div className="column is-2 is-offset-1">
						<div className="card is-large-rounded med-shadow is-pineapple" style={{ margin: '1em' }}>
							<div className="card-body">
								<i className="fas fa-syringe fa-4x icon-padding has-text-green" />
							</div>
						</div>
						<br />
						<p className="subtitle has-text-white">
							Free vaccines.
						</p>
					</div>
					<div className="column is-2 is-offset-1">
						<div className="card is-large-rounded med-shadow is-pineapple" style={{ margin: '1em' }}>
							<div className="card-body">
								<i className="far fa-paper-plane fa-4x icon-padding has-text-green" />
							</div>
						</div>
						<br />
						<p className="subtitle has-text-white">
							Simple paperwork.
						</p>
					</div>
				</div>
			</section>
		)
	}
}

export default Value
