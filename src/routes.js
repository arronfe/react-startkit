import App from './App';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        import ('./containers/Home').then((Home) => {
          cb(null, Home.default)
        })
      })
    }
  },
  childRoutes: [{
    path: 'test',
    getComponent: (nextState, cb) => {
      require.ensure([], (require) => {
        import ('./containers/Test').then((Test) => {
          cb(null, Test.default)
        })
      })
    },
    onEnter: () => {
      console.log('entry test page')
    }
  }]
};

export default routes;