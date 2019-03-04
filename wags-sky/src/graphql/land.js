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

export const SHOW_ADOPT = gql`
	mutation toggleAdopt($adopt: Boolean!) {
		toggleAdopt(adopt: $adopt) @client
	}
`

export const GET_ADOPT = gql`
	{
		adopt @client
	}
`


export const SHOW_AUTH = gql`
	mutation toggleAuth($show: Boolean!, $type: String!) {
		toggleAuth(show: $show, type: $type) @client
	}
`

export const GET_AUTH = gql`
	{
		auth @client {
			show
			type
		}
	}
`
