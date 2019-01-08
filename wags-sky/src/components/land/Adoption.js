import React, { Component } from 'react'

// Components
import Dog1 from '../../assets/images/dog1.jpg'
import Dog2 from '../../assets/images/dog2.jpg'
import Dog3 from '../../assets/images/dog3.jpg'
import Dog4 from '../../assets/images/dog4.jpg'
import Dog5 from '../../assets/images/dog5.jpg'
import Dog6 from '../../assets/images/dog6.jpg'
import Dog7 from '../../assets/images/dog7.jpg'
import Dog8 from '../../assets/images/dog8.jpg'

class Adoption extends Component {
	render() {
		return (
			<section className="section is-medium is-ceil">
				<div className="columns">
					<div className="column is-offset-2">
							<h1 className="title">
								Adopt your best friend.
							</h1>
					</div>
					<div className="column is-2">
						<div className="control has-icons-left has-icons-right">
							<input className="input is-rounded" type="text" placeholder="Search" />
							<span className="icon is-small is-left">
								<i className="fas fa-search" />
							</span>
						</div>
					</div>
					<div className="column is-2" />
				</div>
				<div className="columns is-multiline is-centered">
					<div className="column is-2" />
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow badge is-badge-small" data-badge="">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog1} alt="dog 1" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow badge is-badge-small" data-badge="">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog2} alt="dog 2" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog3} alt="dog 3" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog4} alt="dog 4" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2" />
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog5} alt="dog 5" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog6} alt="dog 6" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog7} alt="dog 7" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div className="card is-small-rounded pointer v-light-shadow">
							<div className="card-image">
								<figure className="image is-4by3">
									<img className="is-small-rounded" src={Dog8} alt="dog 8" />
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default Adoption
