// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'
import { Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Components
import Contact from '../../components/land/Contact'

// Apollo
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils'
import { GET_CONTACT, SHOW_CONTACT } from '../../graphql/land' // to be used.


const mocks = MockedResponse // undefined for now.
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('Contact component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <Switch>
              <Contact />
            </Switch>
          </Router>
        </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
