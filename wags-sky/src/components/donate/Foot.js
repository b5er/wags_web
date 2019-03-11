import React, { Component } from 'react'

class Foot extends Component {
  render() {
    return (
      <div className="hero-foot">
        <div className="section payment-foot">
          <div className="container">
            <p className="is-size-7 has-text-centered has-text-davy-grey">
              Wags does not store your payment information and AES-256 encryption is used throughout your
              payment process. Your security is important to us. If you have any questions checkout our <a
                href="https://app.termly.io/document/privacy-policy/6aedf1c0-b262-42d8-a507-72abe96e6ec5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Privacy Policy</strong>
              </a> or reach out to us at lovewags19@gmail.com.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Foot
