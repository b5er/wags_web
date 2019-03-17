import React, { Component } from 'react'


class Value extends Component {
	render() {
		return (
			<section id="value-prop" className="section is-medium is-ceil" data-test="value-proposition">
				<div className="columns">
					<div className="column is-5 is-offset-2">
						<div className="columns is-multiline">
							<div className="column is-12">
								<h1 className="title is-size-2 has-text-isabelline">
									Be their hero
									<br />
									bring joy to your home
								</h1>
							</div>
							<div className="column is-12" />
							<div className="column is-3">
								<div className="columns is-multiline">
									<div className="column is-12" />
									<div className="column is-12" />
									<div className="column is-12" />
									<div className="column is-12">
										<i className="fas fa-cat fa-5x has-text-pineapple" />
									</div>
								</div>
							</div>
							<div className="column is-6">
								<i className="fas fa-home fa-10x has-text-pineapple phone-hide" />
							</div>
						</div>
					</div>
					<div className="column">

						<div className="columns is-multiline">
							<div className="column is-1">
								<div className="card is-ceil value-prop-icon phone-hide">
									<div className="card-body">
										<i className="far fa-calendar-check value-calendar-icon fa-lg has-text-pineapple" />
									</div>
								</div>
							</div>
							<div className="column is-4">
								<p className="is-size-5 has-text-columbia-blue">
									Make appointment
								</p>
								<p className="is-size-7 has-text-isabelline">
									Book a time for us to get to know you, and
									for you to see your awesome companion. We'll
									remind you when your appointment is coming up.
								</p>
							</div>
							<div className="column is-7" />
							<div className="column is-1">
								<div className="card is-ceil value-prop-icon phone-hide">
									<div className="card-body">
										<i className="far fa-paper-plane value-plane-icon fa-lg has-text-pineapple" />
									</div>
								</div>
							</div>
							<div className="column is-4">
								<p className="is-size-5 has-text-columbia-blue">
									Simple paperwork
								</p>
								<p className="is-size-7 has-text-isabelline">
									Once you know which great new friend you can
									take care of, you can fill out a few simple
									forms and pay a small fee, then you can bring them to their new home.
								</p>
							</div>
							<div className="column is-7" />
							<div className="column is-1">
								<div className="card is-ceil value-prop-icon phone-hide">
									<div className="card-body">
										<i className="fas fa-syringe value-syringe-icon fa-lg has-text-pineapple" />
									</div>
								</div>
							</div>
							<div className="column is-4">
								<p className="is-size-5 has-text-columbia-blue">
									Free vaccines
								</p>
								<p className="is-size-7 has-text-isabelline">
									Every creature is given age appropriate vaccinations
									and immunizations. If after adoption, as your
									companion grows, needs additional care you can
									bring them back for the needed vaccines.
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
