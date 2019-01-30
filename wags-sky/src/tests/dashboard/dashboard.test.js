// integration tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Dashboard from '../../components/dashboard'


describe('Dashboard component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Dashboard />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
