import React from 'react';
import { render } from 'react-dom';

// Routes
import Routes from './routes'

// Apollo
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

// Styles
// import './styles/css/core/core.min.css'
import './styles/css/routes/bundle_routes.min.css'

// Utils
import * as serviceWorker from './utils/serviceWorker'

render(
	(
		<ApolloProvider client={client}>
			<Routes />
		</ApolloProvider>
	),
	document.querySelector('#root')
)

// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
