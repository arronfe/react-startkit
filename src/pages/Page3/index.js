import React, {Component} from 'react';
import { Link } from 'react-router';

class Page3 extends Component {
  render() {
    const { match } = this.props;
    console.log(this.props)
    return (
      <div>
        <h2>hello page3</h2>
        <Link to={`/page3/bus`}>Go bus</Link>
        <Link to={`/page3/cart`}>Go cart</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Page3;