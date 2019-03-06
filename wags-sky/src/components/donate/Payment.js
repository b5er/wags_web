import React, { Component } from 'react'

class Payment extends Component {
  render() {
    return (
      <section className="content">
        <div className="field">
          <label className="label has-text-pineapple">
            Amount
          </label>
          <div className="field has-addons">
            <div className="control has-icons-left">
              <input
                className={`input is-success`}
                type="text"
                onChange={e => console.log(e.target.value)}
                value={''}
                placeholder="10.00"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-dollar-sign" />
              </span>
            </div>
            <div className="control">
              <span className="select">
                <select>
                  <option>One time</option>
                  <option>Recurring</option>
                </select>
              </span>
            </div>
          </div>
        </div>
        <br />
        <div className="field">
          <label className="label has-text-pineapple">
            Card
            <i className="fab fa-cc-visa fa-lg" />
            <i className="fab fa-cc-mastercard fa-lg" />
            <i className="fab fa-cc-discover fa-lg" />
            <i className="fab fa-cc-amex fa-2x" />
            <i className="fab fa-cc-jcb fa-lg" />
            <i className="fab fa-cc-diners-club fa-lg" />
          </label>
          <div className="control has-icons-left">
            <input
              className={`input is-success`}
              type="text"
              onChange={e => console.log(e.target.value)}
              value={''}
              placeholder="4242 4242 4242 4242"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-credit-card" />
            </span>
          </div>
          {
            // submit && !name ?
            // <p className="help is-danger">
            //   A name is required
            // </p>
            // :
            // null
          }
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field">
              <label className="label has-text-pineapple">
                Expiration
              </label>
              <div className="control">
                <input
                  className={`input is-success`}
                  type="text"
                  onChange={e => console.log(e.target.value)}
                  value={''}
                  placeholder="10/23"
                />
              </div>
            </div>
            <div className="field">
              <label className="label has-text-pineapple">
                CVC <i className="fas fa-question-circle fa-xs" />
              </label>
              <div className="control">
                <input
                  className={`input is-success`}
                  type="text"
                  onChange={e => console.log(e.target.value)}
                  value={''}
                  placeholder="123"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Payment
