// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import CheckoutForm from '../../../components/land/donation/CheckoutForm'


describe('CheckoutForm component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<CheckoutForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
