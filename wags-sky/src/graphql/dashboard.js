import gql from 'graphql-tag'

export const UPDATE_ITEM = gql`
	mutation updateItem($item: String!) {
		updateItem(item: $item) @client
	}
`

export const GET_ITEM = gql`
	{
		item @client
	}
`
