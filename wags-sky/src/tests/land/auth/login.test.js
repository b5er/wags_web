// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Login from '../../../components/land/auth/Login'


describe('Login component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Login />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
