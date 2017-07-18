import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.less';

import PeoplePage from './pages/PeoplePage';
import routes  from './routes';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';

class App extends Component {
  render() {
    return (
      <Router>
        <div id="home">
          <h2>Hello React router 4</h2>
          <Link to="/page1">Go Page1</Link>
          <Link to="/page2">Go Page2</Link>
          <Link to="/page3">Go Page3</Link>
          <PeoplePage />
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
          ))}
        </div>
      </Router>
    );
  }
}

export default App;