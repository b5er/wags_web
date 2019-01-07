import React, { Component } from 'react'

class Donate extends Component {
  render() {
    return (
      <section className="section is-ceil">
        <h1 className="title">
          Donate
        </h1>
        <div className="columns">
          <div className="column is-4">
            <div className="card">
              <div className="card-content">
                <form>
                  <input
                    placeholder="fes"
                  />
                  <button>
                    Donate
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Donate
