// Integration tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Adoption from '../../../components/land/adoption'


describe('Adoption component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Adoption />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
