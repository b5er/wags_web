import React, { Component } from 'react'

// Components
import Profile from './Profile'

// Apollo
import { compose, graphql } from 'react-apollo'
import { GET_ITEM, UPDATE_ITEM } from '../../../graphql/dashboard'


class Menu extends Component {

  render() {

    const { getItem, updateItem } = this.props

    return (
      <aside className="column is-2 light-shadow is-paddingless menu-column is-pineapple">
        <Profile />
        <nav className="menu">
          <ul className="menu-list">
            <li>
              <a
                className={`${getItem.item === 'home' ? 'is-active':'has-text-isabelline-important'}`}
                onClick={async e => {
                  e.preventDefault()
                  try {
                    await updateItem({ variables: { item: 'home' } })
                  } catch(e) {
                    //TODO: add animation or user-friendly error
                    console.log(e)
                  }
                }}
              >
                <i className="fas fa-home has-right-small-padding has-text-blue" />
                Home
              </a>
            </li>
            <li>
              <a
                className={`${getItem.item === 'medical' ? 'is-active':'has-text-isabelline-important'}`}
                onClick={async e => {
                  e.preventDefault()
                  try {
                    await updateItem({ variables: { item: 'medical' } })
                  } catch(e) {
                    //TODO: add animation or user-friendly error
                    console.log(e)
                  }
                }}
              >
                <i className="fas fa-briefcase-medical has-right-small-padding has-text-blue" />
                Medical
              </a>
            </li>
            <li>
              <a
                className={`${getItem.item === 'appointment' ? 'is-active':'has-text-isabelline-important'}`}
                onClick={async e => {
                  e.preventDefault()
                  try {
                    await updateItem({ variables: { item: 'appointment' } })
                  } catch(e) {
                    //TODO: add animation or user-friendly error
                    console.log(e)
                  }
                }}
              >
                <i className="fas fa-calendar-check has-right-small-padding has-text-blue" />
                Appointments
              </a>
            </li>
            <li>
              <a
                className={`menu-item-offset ${getItem.item === 'orders' ? 'is-active':'has-text-isabelline-important'}`}
                onClick={async e => {
                  e.preventDefault()
                  try {
                    await updateItem({ variables: { item: 'orders' } })
                  } catch(e) {
                    //TODO: add animation or user-friendly error
                    console.log(e)
                  }
                }}
              >
                <i className="fas fa-piggy-bank has-right-small-padding has-text-blue" />
                Orders
              </a>
            </li>
            <li>
              <a
                className={`menu-item-offset ${getItem.item === 'community' ? 'is-active':'has-text-isabelline-important'}`}
                onClick={async e => {
                  e.preventDefault()
                  try {
                    await updateItem({ variables: { item: 'community' } })
                  } catch(e) {
                    //TODO: add animation or user-friendly error
                    console.log(e)
                  }
                }}
              >
                <i className="fas fa-users has-right-small-padding has-text-blue" />
                Community
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default compose(
  graphql(GET_ITEM, { name: 'getItem' }),
  graphql(UPDATE_ITEM, { name: 'updateItem' })
)(Menu)
