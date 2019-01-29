import React, { Component } from 'react'

// Components
import OverviewCard from './OverviewCard'
import MedicalCard from './MedicalCard'
import UpcomingCard from './UpcomingCard'
import OrdersCard from './OrdersCard'

class Home extends Component {
  render() {
    return (
      <div>
        <div className="columns is-multiline">
          <OverviewCard />
          <MedicalCard />
          <UpcomingCard />
          <OrdersCard />
        </div>

        <div className="columns is-multiline">

          <div className="column is-6">
            <div className="panel">
              <p className="panel-heading">
                Active: Daily
              </p>
              <div className="panel-block">
                <figure className="image is-16x9">
                  <h1 className="has-text-pineapple">
                    Graph goes here
                  </h1>
                </figure>
              </div>
            </div>
          </div>

          <div className="column is-6">
            <div className="panel">
              <p className="panel-heading">
                Expenses: Daily - $200
              </p>
              <div className="panel-block">
                <figure className="image is-16x9">
                  <h1 className="has-text-pineapple">
                    Graph goes here
                  </h1>
                </figure>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Home
