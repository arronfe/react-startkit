import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
	Provider
} from 'react-redux';
import {
	Router,
	browserHistory
} from 'react-router';
import configureStore from './store';
import routes from './routes';
import './assets/less/reset.less'

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
    <Router routes={routes}
            history={browserHistory}/>
  </Provider>,
	document.getElementById('root'));
registerServiceWorker();