import React, { Component } from 'react'

// Components
import personOne from '../../assets/images/1.png'
import personTwo from '../../assets/images/2.png'
import personThree from '../../assets/images/3.png'


class Social extends Component {
	render() {
		return (
			<section className="section is-medium is-ceil">
				<h1 className="title is-size-1 has-text-centered has-text-isabelline">
					Success stories
				</h1>
				<br />
				<div className="columns is-centered">
					<div className="column is-2">
						<div className="box is-isabelline">
							<i className="fas fa-quote-left has-text-green" />
							<p className="has-text-pineapple">
								{/*https://www.rocketdogrescue.org/success-story/sydney-fka-posey/*/}
								Just wanted to let you all now
								that Posey aka Sydney is doing
								great! She is settling in super
								quickly and is starting to come
								out of her shell. Also turns out
								she loves Vanilla ice cream!
								Thanks so much for bringing her
								into my life.
							</p>
							<div className="" style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
								<figure className="image is-128x128">
									<img className="is-rounded" src={personOne} alt="" />
								</figure>
							</div>
							<div className="has-text-pineapple has-text-centered">
								<h5>Irma Walters</h5>
								<span>Dog Owner</span>
							</div>
						</div>
					</div>
					<div className="column is-1" />
					<div className="column is-2">
						<div className="box is-isabelline">
							<i className="fas fa-quote-left has-text-green" />
							<p className="is-size-6 has-text-pineapple">
								{/*https://www.rocketdogrescue.org/success-story/kermit/*/}
								In March of 2014, I met Herbie
								(now Kermit the Dog) at a rescue
								event in South San Francisco.
								He is quite simply the best dog
								in the world, and I’m lucky that
								he rescued me! Separately, thank you
								for all that you do! Wags is amazing!
							</p>
							<div className="" style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
								<figure className="image is-128x128">
									<img className="is-rounded" src={personTwo} alt="" />
								</figure>
							</div>
							<div className="has-text-centered has-text-pineapple">
								<h5>Irma Walters</h5>
								<span>Dog Owner</span>
							</div>
						</div>
					</div>
					<div className="column is-1" />
					<div className="column is-2">
						<div className="box is-isabelline">
							<i className="fas fa-quote-left has-text-green" />
							<p className="has-text-pineapple">
								{/*https://www.rocketdogrescue.org/success-story/chuck/*/}
								Just wanted to write you a quick
								update on Charles “Chuck” Yaeger.
								We adopted him about a month ago
								from Animal Shelter and he is an
								absolute joy. Thank you for pulling
								him from a much gloomier fate in
								Greenbelt! We love him!
							</p>
							<div className="" style={{ display: 'flex', justifyContent: 'center', margin: '1em 0' }}>
								<figure className="image is-128x128">
									<img className="is-rounded" src={personThree} alt="" />
								</figure>
							</div>
							<div className="has-text-centered has-text-pineapple">
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
