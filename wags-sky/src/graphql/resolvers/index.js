// Apollo
// import gql from 'graphql-tag'

export const defaults = {
	about: false,
	contact: false,
	auth: {
		show: false,
		type: 'login',
		__typename: 'auth'
	}
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
		}
	}
}
