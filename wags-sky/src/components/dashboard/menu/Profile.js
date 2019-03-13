import React, { Component } from 'react'

// Components
import Dog7 from '../../../assets/images/dog7.jpg'


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      dropdown: false,
      item: ''
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.clickOutside, false)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickOutside, false)
  }

  clickOutside = e => {
    if(!e.target.classList.contains('click-inside'))
      this.setState({ dropdown: false })
	}

  render() {

    const { dropdown, item } = this.state

    return (
      <section className="section is-paddingless">
        <figure className="image menu-profile-img">
          <img className="is-large-rounded light-shadow pointer profile-img-size" src={Dog7} alt="Dog avatar." />
        </figure>
        <span className="profile-name">
          <div className="columns">
            <div className="column right-paddingless">
              <p className="subtitle has-text-isabelline">
                Pepz
              </p>
            </div>
            <div className="column is-2 small-left-padding">
              <div className={`dropdown ${dropdown ? 'is-active':''}`}>
                <div className="dropdown-trigger">
                  <div className="" aria-haspopup="true" aria-controls="dropdown-menu">
                    <span
                      onClick={e => {
                        e.preventDefault()
                        this.setState({ dropdown: !dropdown })
                      }}
                    >
                      <i className="fas fa-sort-down pointer click-inside has-text-malachite-green" />
                    </span>
                  </div>
                </div>
                <div className="dropdown-menu click-inside" id="dropdown-menu" role="menu">
                  <div className="dropdown-content click-inside">
                    <a
                      href="#profile"
                      className={`dropdown-item no-highlight click-inside ${item === 'profile' ? 'is-active':''}`}
                      onMouseEnter={e => {
                        this.setState({ item: 'profile' })
                      }}
                      onMouseLeave={e => {
                        this.setState({ item: '' })
                      }}
                    >
                      Profile
                    </a>
                    <a
                      href="#update"
                      className={`dropdown-item no-highlight click-inside ${item === 'update' ? 'is-active':''}`}
                      onMouseEnter={e => {
                        this.setState({ item: 'update' })
                      }}
                      onMouseLeave={e => {
                        this.setState({ item: '' })
                      }}
                    >
                      Update
                    </a>
                    <hr className="dropdown-divider click-inside" />
                    <a
                      href="#support"
                      className={`dropdown-item no-highlight click-inside ${item === 'support' ? 'is-active':''}`}
                      onMouseEnter={e => {
                        this.setState({ item: 'support' })
                      }}
                      onMouseLeave={e => {
                        this.setState({ item: '' })
                      }}
                    >
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </section>
    )
  }
}

export default Profile
