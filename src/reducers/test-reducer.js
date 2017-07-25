import * as types from '../actions/action-types';

let initialState = {
	todos: [{
		name: 'arron',
		sex: 'man'
	}]
};

export default (state = initialState.todos, action) => {
	switch (action.type) {
		case types.ADD_TEST:
			return [...state, Object.assign({}, action.test)];
		default:
			return state;
	}
}