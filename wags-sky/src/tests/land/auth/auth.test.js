// Integration tests
import React from 'react'
import renderer from 'react-test-renderer'
import { Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'

// Components
import Auth from '../../../components/land/auth'

// Apollo
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils'
import { GET_AUTH, SHOW_AUTH } from '../../../graphql/land'


const mocks = MockedResponse
const history = createMemoryHistory({ initialEntries: ['/'] })

describe('Auth component', () => {

  it('Should be null, since apollo is loading', async () => {
    let tree = renderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router history={history}>
          <Switch>
            <Auth />
          </Switch>
        </Router>
      </MockedProvider>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  // TODO: test when Apollo is not loading

})
