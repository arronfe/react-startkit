/**
 * Created by arron on 2017/7/18.
 */
import * as types from '../actions/action-types';

let initialState = {
  todos: [{
    firstname: 'arron',
    lastname: 'zhang'
  }]
};

export default (state = initialState.todos, action) => {
  switch (action.type) {
    case types.ADD_PERSON:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
}