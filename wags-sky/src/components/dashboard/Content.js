import React, { Component } from 'react'

// Components
import Home from './home'
import Medical from './medical'
import Appointment from './appointment'
import Orders from './orders'
import Community from './community'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_ITEM } from '../../graphql/dashboard'


class Content extends Component {

  chooseContent = option => {
    switch(option) {
      case 'medical':
        return <Medical />
      case 'appointment':
        return <Appointment />
      case 'orders':
        return <Orders />
      case 'community':
        return <Community />
      default:
        return <Home />
    }
  }

  getDate = today => {
    const month = {
      '0': 'Jan',
      '1': 'Feb',
      '2': 'Mar',
      '3': 'Apr',
      '4': 'May',
      '5': 'Jun',
      '6': 'Jul',
      '7': 'Aug',
      '8': 'Sep',
      '9': 'Oct',
      '10': 'Nov',
      '11': 'Dec'
    }

    return `${month[today.getMonth() + 1]} ${today.getDate()}, ${today.getFullYear()}`
  }

  render() {

    const { getItem, getItem: { item } } = this.props

    if(getItem.loading)
      return null // TODO: loading animation.

    if(!item)
      return null // TODO: error animation.

    return (
      <main className="column dashboard-content">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <div className="title has-text-isabelline">
                {
                  `${item[0].toUpperCase()}${item.slice(1, item.length)}`
                }
              </div>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <button type="button" className="button is-small">
                March 8, 2017 - {this.getDate(new Date())}
              </button>
            </div>
          </div>
        </div>
        {
          this.chooseContent(item)
        }
      </main>
    )
  }
}

export default compose(
  graphql(GET_ITEM, { name: 'getItem' })
)(Content)
