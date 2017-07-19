/**
 * Created by arron on 2017/7/18.
 */
import * as types from '../actions/action-types';

let initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TEST:
      return [...state, Object.assign({}, action.person)];
    default:
      return state;
  }
}