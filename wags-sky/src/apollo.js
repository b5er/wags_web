import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { withClientState } from 'apollo-link-state'
import { HttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { resolvers, defaults } from './graphql/resolvers'

const typeDefs = `

	type About {
		about: Boolean!
	}

	type Contact {
		contact: Boolean!
	}

	type Auth {
		auth: Boolean!
	}

	type Mutation {
		toggleAbout(about: Boolean!): About
		toggleContact(contact: Boolean!): Contact
		toggleAuth(auth: Boolean!): Auth
	}

	type Query {
		about: About
		contact: Contact
		auth: Auth
	}

`

const httpLink = new HttpLink({
	uri: 'http://localhost:8000'
})

const cache = new InMemoryCache()
const stateLink = withClientState({
	cache,
	resolvers,
	defaults,
	typeDefs
})

const middlewareLink = new ApolloLink((op, fo) => {
	const token = JSON.parse(localStorage.getItem('_x'))
	const authorization = token ? `Bearer ${token}` : ''
	op.setContext({
		headers: {
			authorization
		}
	})
	return fo(op)
})

const link = ApolloLink.from([stateLink, middlewareLink, httpLink])
const client = new ApolloClient({
	link,
	cache,
	connectToDevTools: true
})

export default client
