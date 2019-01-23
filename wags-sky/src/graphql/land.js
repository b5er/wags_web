import gql from 'graphql-tag'

export const SHOW_ABOUT = gql`
	mutation toggleAbout($about: Boolean!) {
		toggleAbout(about: $about) @client
	}
`

export const GET_ABOUT = gql`
	{
		about @client
	}
`

export const SHOW_CONTACT = gql`
	mutation toggleContact($contact: Boolean!) {
		toggleContact(contact: $contact) @client
	}
`

export const GET_CONTACT = gql`
	{
		contact @client
	}
`

export const SHOW_AUTH = gql`
	mutation toggleAuth($auth: Boolean!) {
		toggleAuth(auth: $auth) @client
	}
`

export const GET_AUTH = gql`
	{
		auth @client
	}
`
