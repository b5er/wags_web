import React, { Component } from 'react'

// Components
import Navbar from './Navbar'
import Menu from './menu'
import Content from './Content'


class Dashboard extends Component {
  render() {
    return (
        <div className="section is-ceil is-paddingless">
          <Navbar />
          <div className="columns">
            <Menu />
            <Content />
          </div>
        </div>
    )
  }
}

export default Dashboard
