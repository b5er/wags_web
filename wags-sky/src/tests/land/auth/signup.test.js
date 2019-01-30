// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Signup from '../../../components/land/auth/Signup'


describe('Signup component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Signup />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
