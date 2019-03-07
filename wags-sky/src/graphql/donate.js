import gql from 'graphql-tag'

export const UPDATE_CHECKOUT = gql`
	mutation updateCheckout($name: String!, $email: String!, $phone: String!, $zip: String!, $amount: Boolean!, $card: Boolean!, $expiration: Boolean!, $cvc: Boolean!) {
		updateCheckout(name: $name, email: $email, phone: $phone, zip: $zip, amount: $amount, card: $card, expiration: $expiration, cvc: $cvc) @client
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
      card,
      expiration,
      cvc
		}
	}
`
