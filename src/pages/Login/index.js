import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      redirectToReffer: false
    }
  }

  login = () => {
    this.setState({
      redirectToReffer: true
    })
  };

  render() {

    const { from } = this.props.location.state || {from : {pathname: '/'}};
    const { redirectToReffer } = this.state;

    console.log(this.props);

    if(redirectToReffer) {
      console.log('yes', this.props);
      <Redirect to={from}/>
    }

    return (
      <div>
        <h2>Login page1</h2>
        <button onClick={this.login}>Login</button>
      </div>
    )
  }
}

export default Login;