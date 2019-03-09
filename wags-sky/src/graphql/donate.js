import gql from 'graphql-tag'

export const UPDATE_CHECKOUT = gql`
	mutation updateCheckout($name: String!, $email: String!, $phone: String!, $zip: String!, $amount: String!, $complete: Boolean!, $receipt: String!) {
		updateCheckout(name: $name, email: $email, phone: $phone, zip: $zip, amount: $amount, complete: $complete, receipt: $receipt) @client
	}
`

export const GET_CHECKOUT = gql`
	{
		checkout @client {
			name,
      email,
      phone,
      zip,
      amount,
			complete,
			receipt
		}
	}
`
