// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Pet from '../../../components/land/adoption/Pet'

// TODO: further setup for fetch requests to be mocked.
const mockSource = {
  age: 2,
  breeds: ['Poodle'],
  description: 'She goes...',
  gender: 'Female',
  name: 'Hue',
  petImage: 'uploads/15477024361621547081225797dog2.jpg',
  __v: 0,
  _id: '5c4010a429b470154845b6fe'

}

describe('Pet component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(<Pet source={mockSource} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
