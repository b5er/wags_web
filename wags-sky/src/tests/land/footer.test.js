// Unit tests
import React from 'react'
import renderer from 'react-test-renderer'
import { Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Components
import Footer from '../../components/land/Footer'

// Apollo
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils'
import { SHOW_ABOUT, SHOW_CONTACT } from '../../graphql/land' // to be used.


const mocks = MockedResponse // undefined for now.
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('Footer component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <Switch>
              <Footer />
            </Switch>
          </Router>
        </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
