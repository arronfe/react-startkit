/**
 * Created by arron on 2017/7/18.
 */

import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Bus from './pages/Bus';
import Cart from './pages/Cart';
import Login from './pages/Login';

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
    ],
  },
  {
    path: '/login',
    component: Login
  }
];

export default routes;