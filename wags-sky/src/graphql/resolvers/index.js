// Apollo
// import gql from 'graphql-tag'

export const defaults = {
	about: false,
	contact: false,
	auth: {
		show: false,
		type: 'login',
		__typename: 'auth'
	},
	checkout: {
		name: '',
		email: '',
		phone: '',
		zip: '',
		amount: '',
		interval: '',
		token: '',
		complete: false,
		receipt: '',
		__typename: 'checkout'
	},
	item: 'home',

	schedule: false
}

export const resolvers = {
	Mutation: {
		toggleAbout: (_, { about }, { cache }) => {
			cache.writeData({ data: { about } })
			return null
		},
		toggleContact: (_, { contact }, { cache }) => {
			cache.writeData({ data: { contact } })
			return null
		},
		toggleAuth: (_, showAuth, { cache }) => {
			const auth = {
				...showAuth,
				__typename: 'auth'
			}
			cache.writeData({ data: { auth } })
			return null
		},
		updateCheckout: (_, checkout, { cache }) => {
			const newCheckout = {
				...checkout,
				__typename: 'checkout'
			}
			cache.writeData({ data: { checkout: newCheckout } })
			return null
		},
		updateItem: (_, { item }, { cache }) => {
			cache.writeData({ data: { item } })
			return null
		},
		toggleSchedule: (_, { schedule }, { cache }) => {
			cache.writeData({ data: { schedule } })
			return null
		}
	}
}
