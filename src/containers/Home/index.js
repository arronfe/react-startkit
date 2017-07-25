import React, {
	Component
} from 'react';
import {
	Link
} from 'react-router';
import PropTypes from 'prop-types';
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import * as testActions from '../../actions/test-actions';

import './index.less';
import test from '../../assets/images/test.png';

class Home extends Component {

	componentWillMount() {
		console.log('hahha')
	}

	add = () => {
		this.props.actions.addTest({
			name: 'steven',
			sex: 'famale'
		})
	}

	render() {
		return (
			<div>
          <h2>hello Home page</h2>
          <img src={test} alt="" className = "home-image"/>
          <Link to="/test">Go Page1</Link>
          <button onClick={this.add}>Add</button>
          {this.props.test.map(t => (
						<li key={t.sex}>{t.name}</li>
          ))}
      </div>
		)
	}
}

function mapStateToProps(state, props) {
	return {
		test: state.test
	}
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(testActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);