// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'
import { Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Components
import Navbar from '../../../components/land/hero/Navbar'

// Apollo
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils'
import { SHOW_ABOUT, SHOW_CONTACT, SHOW_AUTH } from '../../../graphql/land' // to be used.


const mocks = MockedResponse // undefined for now.
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('Navbar component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <Switch>
              <Navbar />
            </Switch>
          </Router>
        </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
