import React from 'react'
import ReactDOM from 'react-dom'


import * as serviceWorker from './utils/serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))


// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
