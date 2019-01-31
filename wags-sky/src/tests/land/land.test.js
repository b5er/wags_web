// Integration test
import React from 'react'
import renderer from 'react-test-renderer'
import { Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Components
import Land from '../../components/land'

// Apollo
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils'


const mocks = MockedResponse // undefined for now.
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('Footer component', () => {

  it('Should render without errors', () => {
    let tree = renderer.create(
        <MockedProvider mocks={mocks} addTypename={false}>
          <Router history={history}>
            <Switch>
              <Land />
            </Switch>
          </Router>
        </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

})
