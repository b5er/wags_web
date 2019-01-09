import React from 'react'
import { Route, Router, Switch, Redirect } from 'react-router-dom'
import createHistory from './history'

// Utils
import { checkAuth } from './utils/auth'

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

const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" component={LandPage} />
			<Route exact path="/adopt" component={AdoptPage} />
			<Route exact path="/donate" component={DonatePage} />
			<AuthRoute exact path="/dashboard" component={DashPage} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes
