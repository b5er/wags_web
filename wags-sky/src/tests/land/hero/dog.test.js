// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Dog from '../../../components/land/hero/Dog'


describe('Dog component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Dog />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
