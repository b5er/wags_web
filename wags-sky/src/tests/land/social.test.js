// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Social from '../../components/land/Social'


describe('Social component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Social />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
