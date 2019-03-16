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
		show: Boolean!
		type: String!
	}

	type Checkout {
		name: String!,
		email: String!,
		phone: String!,
		zip: String!,
		amount: String!,
		interval: String!,
		token: String!,
		complete: Boolean!,
		receipt: String!
	}

	type Item {
		item: String!
	}

	type Schedule {
		schedule: Boolean!
	}

	type Mutation {
		toggleAbout(about: Boolean!): About
		toggleContact(contact: Boolean!): Contact
		toggleAuth(auth: Boolean!, type: String!): Auth
		updateCheckout(name: String!, email: String!, phone: String!, zip: String!, amount: String!, interval: String!, token: String!, complete: Boolean!, receipt: String!): Checkout
		updateItem(item: String!): Item
		toggleSchedule(schedule: Boolean!): Schedule
	}

	type Query {
		about: About
		contact: Contact
		auth: Auth
		checkout: Checkout
		item: Item
		schedule: Schedule
	}

`

const httpLink = new HttpLink({
	uri: `${process.env.REACT_APP_BACKEND_URL}`
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
