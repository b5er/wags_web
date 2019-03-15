import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Navbar from './Navbar'
import Pet from './pet'
import PetList from './petList'

class Adopt extends Component {

  content = params => {
    if (Object.entries(params).length === 0 && params.constructor === Object)
      return <PetList />
    return <Pet petID={params.petID} />
  }

  render() {

    const { match: { params } } = this.props

    return (
      <section className="section is-columbia-blue" style={{ minHeight: '100vh', paddingTop: '0' }}>
        <Navbar />
        <div className="container is-fluid">
          {this.content(params)}
        </div>
      </section>
    )
  }
}

export default withRouter(Adopt)
