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
	constructor() {
		super()
		this.state = {
			picture: null
		}
	}

	render() {
		const { picture } = this.state

		return (
			<section className="section is-ceil">
				<h1 className="title is-size-1 has-text-centered has-text-isabelline">
					You can have a success too
				</h1>
				<br />
				<div className="columns">
					<div className="column is-offset-2">
							<h3 className="title is-size-3 has-text-pineapple">
								Adopt your best friend.
							</h3>
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
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog1' ? 'is-overflow-hidden':'badge is-badge-info is-badge-small'}`} data-badge=""
							onMouseEnter={() => {
								this.setState({ picture: 'dog1' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog1' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog1' ? 'is-medium-blur':''}`} src={Dog1} alt="dog 1" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog2' ? 'is-overflow-hidden':'badge is-badge-info is-badge-small'}`} data-badge=""
							onMouseEnter={() => {
								this.setState({ picture: 'dog2' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog2' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog2' ? 'is-medium-blur':''}`} src={Dog2} alt="dog 2" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog3' ? 'is-overflow-hidden':'badge is-badge-small'}`}
							onMouseEnter={() => {
								this.setState({ picture: 'dog3' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog3' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog3' ? 'is-medium-blur':''}`} src={Dog3} alt="dog 3" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog4' ? 'is-overflow-hidden':'badge is-badge-small'}`}
							onMouseEnter={() => {
								this.setState({ picture: 'dog4' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog4' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog4' ? 'is-medium-blur':''}`} src={Dog4} alt="dog 4" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2" />
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog5' ? 'is-overflow-hidden':'badge is-badge-small'}`}
							onMouseEnter={() => {
								this.setState({ picture: 'dog5' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog5' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog5' ? 'is-medium-blur':''}`} src={Dog5} alt="dog 5" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog6' ? 'is-overflow-hidden':'badge is-badge-small'}`}
							onMouseEnter={() => {
								this.setState({ picture: 'dog6' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog6' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog6' ? 'is-medium-blur':''}`} src={Dog6} alt="dog 6" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog7' ? 'is-overflow-hidden':'badge is-badge-small'}`}
							onMouseEnter={() => {
								this.setState({ picture: 'dog7' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog7' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog7' ? 'is-medium-blur':''}`} src={Dog7} alt="dog 7" />
								</figure>
							</div>
						</div>
					</div>
					<div className="column is-2">
						<div
							className={`card is-small-rounded pointer v-light-shadow ${picture === 'dog8' ? 'is-overflow-hidden':'badge is-badge-small'}`}
							onMouseEnter={() => {
								this.setState({ picture: 'dog8' })
							}}
							onMouseLeave={e => {
								this.setState({ picture: '' })
							}}
						>
							<div className="card-image">
								{picture === 'dog8' ?
									<div>
										<div className="card is-small-rounded is-isabelline adopt-img-overlay adopt-img-fadein" />
										<p className="has-text-pineapple is-size-7 adopt-description">
											Labrador
											<br /><br />
											Large, young
											<br />
											Greenbelt, MD
										</p>
									</div>
									:
									null
								}
								<figure className="image is-4by3">
									<img className={`is-small-rounded ${picture === 'dog8' ? 'is-medium-blur':''}`} src={Dog8} alt="dog 8" />
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
