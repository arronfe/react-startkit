/**
 * Created by arron on 2017/7/18.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default(initialState) => {
  return createStore(rootReducer, applyMiddleware(thunk), initialState)
};