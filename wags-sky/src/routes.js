import React from 'react'
import { Route, Router, Switch/*, Redirect*/ } from 'react-router-dom'
import createHistory from './history'

// Utils
import withTracker from './utils/withTracker'
// import { checkAuth } from './utils/auth'

// Google Analytics
import ReactGA from 'react-ga' // update to 2.5.6

// Containers
import LandPage from './containers/LandPage'
import AdoptPage from './containers/AdoptPage'
import DonatePage from './containers/DonatePage'

import DashPage from './containers/DashPage'

import ErrorPage from './containers/ErrorPage'


// const AuthRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={props => (
// 		checkAuth() ?
// 		(<Component {...props} />)
// 		:
// 		(<Redirect to={{ pathname: '/' }} />)
// 	)} />
// )

if (process.env.NODE_ENV === 'production')
	ReactGA.initialize(process.env.REACT_APP_GA_TOKEN)

const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" render={props => {
				if (process.env.NODE_ENV === 'production') {
					const GATrackedLand = withTracker(LandPage)
					return <GATrackedLand {...props} />
				}
				return <LandPage {...props} />
			}} />
			<Route exact path="/adopt" render={props => {
				if (process.env.NODE_ENV === 'production') {
					const GATrackedAdopt = withTracker(AdoptPage)
					return <GATrackedAdopt {...props} />
				}
				return <AdoptPage {...props} />
			}} />
			<Route path="/adopt/:petID" render={props => {
				if (process.env.NODE_ENV === 'production') {
					const GATrackedAdopt = withTracker(AdoptPage)
					return <GATrackedAdopt {...props} />
				}
				return <AdoptPage {...props} />
			}} />
			<Route exact path="/donate" render={props => {
				if (process.env.NODE_ENV === 'production') {
					const GATrackedDonate = withTracker(DonatePage)
					return <GATrackedDonate {...props} />
				}
				return <DonatePage {...props} />
			}} />
			<Route exact path="/dashboard" render={props => {
				if (process.env.NODE_ENV === 'production') {
					const GATrackedDash = withTracker(DashPage)
					return <GATrackedDash {...props} />
				}
				return <DashPage {...props} />
			}} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes
