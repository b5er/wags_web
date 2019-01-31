// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'
import { Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Components
import About from '../../components/land/About'

// Apollo
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils'
import { GET_ABOUT, SHOW_ABOUT } from '../../graphql/land' // to be used.


const mocks = MockedResponse // undefined for now.
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('About component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <Switch>
              <About />
            </Switch>
          </Router>
        </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
