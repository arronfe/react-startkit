import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import App from '../App'

const routeConfig = [{
    path: '/',
    component: App,
    IndexRoute: {component: Page1}
}];

export default routeConfig;