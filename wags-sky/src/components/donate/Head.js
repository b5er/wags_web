import React, { Component } from 'react'

// Utils
import { getStorageItem } from '../../utils/storage'


class Head extends Component {
  render() {
    return (
      <div className="hero-head">
        <h1 className="title has-text-centered">
          $ {getStorageItem('amount')}
        </h1>
      </div>
    )
  }
}

export default Head
