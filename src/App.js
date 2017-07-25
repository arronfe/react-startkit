import React, {
  Component
} from 'react';
import test from './test.png';
import './App.less';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={test} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;