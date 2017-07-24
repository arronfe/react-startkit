/**
 * Created by arron on 2017/7/18.
 */

import App from './App';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        import ('./pages/Home').then((Home) => {
          cb(null, Home.default)
        })
      })
    }
  },
  childRoutes: [{
    path: 'page1',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        import ('./pages/Page1').then((Page1) => {
          cb(null, Page1.default)
        })
      })
    }
  }, {
    path: 'page2',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        import ('./pages/Page2').then((Page2) => {
          cb(null, Page2.default)
        })
      })
    }
  }, {
    path: 'page3',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        import ('./pages/Page3').then((Page3) => {
          cb(null, Page3.default)
        })
      })
    },
    childRoutes: [{
      path: 'bus',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          import ('./pages/Bus').then((Bus) => {
            cb(null, Bus.default)
          })
        })
      },
      onEnter: (() => console.log('entry bus component'))
    }, {
      path: 'cart',
      getComponent: (nextState, cb) => {
        require.ensure([], (require) => {
          import ('./pages/Cart').then((Cart) => {
            cb(null, Cart.default)
          })
        })
      }
    }]
  }]
};



export default routes;