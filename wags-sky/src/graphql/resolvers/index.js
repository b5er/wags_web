// Apollo
// import gql from 'graphql-tag'

export const defaults = {
	about: false,
	contact: false,
	adopt: false,
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
		complete: false,
		isLoading: false,
		__typename: 'checkout'
	},
	item: 'home'
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
		toggleAdopt: (_, { adopt }, { cache })  => {
			cache.writeData({ data: { adopt } })
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
		}
	}
}
