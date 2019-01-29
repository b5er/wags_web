// Integration tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Donation from '../../../components/land/donation'


describe('Donation component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Donation />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
