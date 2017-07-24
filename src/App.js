import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router';
import './App.less';

import PeoplePage from './pages/PeoplePage';

import './App.less';

class App extends Component {

  async componentWillMount() {
    console.log('async component mount')
  }

  render() {
    return (
      <div id="home">
        <h2>Hello React router 4 , I am arron</h2>
        <Link to="/page1">Go Page1</Link>
        <Link to="/page2">Go Page2</Link>
        <Link to="/page3">Go Page3</Link>
        <PeoplePage />
        {this.props.children}
      </div>
    );
  }
}

export default App;