import React from 'react';
import ReactDOM from 'react-dom';
import routeConfig from './router';
import {Router, Route, HashRouter, IndexRoute} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router routes={routeConfig} />, document.getElementById('root'));
registerServiceWorker();