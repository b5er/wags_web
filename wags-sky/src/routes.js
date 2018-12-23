import React from 'react'
import { Route, Router, Switch/*, Redirect*/ } from 'react-router-dom'
import createHistory from './history'

// Utils
import { checkAuth } from './utils/checkAuth'

// Containers
import LandPage from './containers/LandPage'
import ErrorPage from './containers/ErrorPage'


// const AuthRoute = ({ component: Component, ...rest }) => (
// 	<Route {...rest} render={props => (
// 		checkAuth() ?
// 		(<Component {...props} />)
// 		:
// 		(<Redirect to={{ pathname: '/' }} />)
// 	)} />
// )

const Routes = () => (
	<Router history={createHistory}>
		<Switch>
			<Route exact path="/" component={LandingPage} />
			<Route exact path="/*" render={props => {
				return <ErrorPage {...props} />
			}}/>
		</Switch>
	</Router>
)

export default Routes