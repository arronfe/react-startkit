/*
  define a private route, which only can visited when user is logining;
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLogin = false;

const PriviteRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isLogin ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: {from: props.location}
      }}/>
    )
  )}>
  </Route>
);

export default PriviteRoute;