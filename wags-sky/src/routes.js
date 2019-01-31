import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import createHistory from './history'

// Utils
import withTracker from './utils/withTracker'
import { checkAuth } from './utils/auth'

// Google Analytics
import ReactGA from 'react-ga' // update to 2.5.6

// Containers
import LandPage from './containers/LandPage'
import AdoptPage from './containers/AdoptPage'
import DonatePage from './containers/DonatePage'

import DashPage from './containers/DashPage'

import ErrorPage from './containers/ErrorPage'


const AuthRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={props => (
		checkAuth() ?
		(<Component {...props} />)
		:
		(<Redirect to={{ pathname: '/' }} />)
	)} />
)

ReactGA.initialize('UA-132230960-1')

const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" render={props => {
				const GATrackedLand = withTracker(LandPage)
				return <GATrackedLand {...props} />
			}} />
			<Route exact path="/adopt" render={props => {
				const GATrackedAdopt = withTracker(AdoptPage)
				return <GATrackedAdopt {...props} />
			}} />
			<Route exact path="/donate" render={props => {
				const GATrackedDonate = withTracker(DonatePage)
				return <GATrackedDonate {...props} />
			}} />
			<Route exact path="/dashboard" render={props => {
				const GATrackedDash = withTracker(DashPage)
				return <GATrackedDash {...props} />
			}} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes
