import React, { Component } from 'react'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_ABOUT, SHOW_ABOUT } from '../../graphql/land'


class About extends Component {
  render() {

    const { getAbout, showAbout } = this.props

    return (
      <div className={`modal ${getAbout.about ? 'is-active':''}`}>
        <div
          className="modal-background"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAbout({ variables: { about: false } })
            } catch(e) {
              console.log(e)
            }
          }}
        />
        <div className="modal-content">
          <div className="card is-pineapple is-small-rounded">
            <div className="card-header modal-header">
              <h1 className="title has-text-pineapple">
                Who we are
              </h1>
            </div>
            <div className="card-content">
                <div className="columns is-centered">
                  <div className="column is-8">
                    <p className="subtitle about-paragraph has-text-isabelline">
                      WAGS is a non-profit organization
                      which is raising funds towards
                      completing special improvement
                      projects and adding enrichment
                      for the animals at the City of
                      Greenbelt Animal Shelter.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <button
          className="modal-close is-large" aria-label="close"
          onClick={async e => {
            e.preventDefault()
            try {
              await showAbout({ variables: { about: false } })
            } catch(e) {
              console.log(e)
            }
          }}
        />
      </div>
    )
  }
}

export default compose(
  graphql(SHOW_ABOUT, { name: 'showAbout' }),
  graphql(GET_ABOUT, { name: 'getAbout' })
)(About)
