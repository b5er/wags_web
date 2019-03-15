import React, { Component } from 'react'

import AdoptCat from '../../../assets/images/adoptCat.svg'

class Cat extends Component {
  render() {
    return (
      <div id="cat">
        <img alt="Embarrased cat, no pets to display." width={250} src={AdoptCat} />
      </div>
    )
  }
}

export default Cat
