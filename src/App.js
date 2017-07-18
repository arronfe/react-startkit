import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.less';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import PeoplePage from './pages/PeoplePage';

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


          <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;