/**
 * Created by arron on 2017/7/18.
 */
import React from 'react';

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Bus from './pages/Bus';
import Cart from './pages/Cart';

const routes = [
  {
    path: '/page1',
    component: Page1
  },
  {
    path: '/page2',
    component: Page2
  },
  {
    path: '/page3',
    component: Page3,
    routes: [
      {
        path: '/page3/bus',
        component: Bus
      },
      {
        path: '/page3/cart',
        component: Cart
      }
    ]
  }
];

export default routes;