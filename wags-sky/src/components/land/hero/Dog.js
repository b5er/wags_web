import React, { Component } from 'react'

class Dog extends Component {
  render() {
    return (
      <div className="dog phone-hide" style={{ marginTop: '10em' }}>

        <div className="dog-body"  style={{ marginTop: '19em' }}>
          <div className="dog-tail">
            <div className="dog-tail">
              <div className="dog-tail">
                <div className="dog-tail">
                  <div className="dog-tail">
                    <div className="dog-tail">
                      <div className="dog-tail">
                        <div className="dog-tail" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dog-torso"  style={{ marginTop: '14em' }} />
        <div className="dog-head">
          <div className="dog-ears">
            <div className="dog-ear" />
            <div className="dog-ear" />
          </div>
          <div className="dog-eyes">
            <div className="dog-eye" />
            <div className="dog-eye" />
          </div>
          <div className="dog-muzzle">
            <div className="dog-tongue" />
          </div>
        </div>

        <div className="ball pointer" tabIndex="0" />
      </div>
    )
  }
}

export default Dog
