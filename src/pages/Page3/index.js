import React, {Component} from 'react';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';
import { Link } from 'react-router-dom';

class Page3 extends Component {
  render() {
    const { routes, match } = this.props;
    console.log(this.props)
    return (
      <div>
        <h2>hello page3</h2>
        <Link to={`${match.url}/bus`}>Go bus</Link>
        <Link to={`${match.url}/cart`}>Go cart</Link>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route}/>
        ))}
      </div>
    )
  }
}

export default Page3;