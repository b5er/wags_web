import React, { Component } from 'react'

class ErrorPage extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-blue">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-1 has-text-centered">
              Ooops something went wrong!
            </h1>
          </div>
        </div>
      </section>
    )
  }
}

export default ErrorPage
