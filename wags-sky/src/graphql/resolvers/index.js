// Apollo
// import gql from 'graphql-tag'

export const defaults = {
	about: false,
	contact: false,
	auth: false
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
		toggleAuth: (_, { auth }, { cache }) => {
			cache.writeData({ data: { auth } })
			return null
		}
	}
}
