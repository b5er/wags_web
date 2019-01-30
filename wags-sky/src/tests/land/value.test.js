// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Value from '../../components/land/Value'


describe('Value component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Value />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
