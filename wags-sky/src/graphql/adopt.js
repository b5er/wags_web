import gql from 'graphql-tag'

export const SHOW_SCHEDULE = gql`
	mutation toggleSchedule($schedule: Boolean!) {
		toggleSchedule(schedule: $schedule) @client
	}
`

export const GET_SCHEDULE = gql`
	{
		schedule @client
	}
`
