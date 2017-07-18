/**
 * Created by arron on 2017/7/18.
 */
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default(initialState) => {
  return createStore(rootReducer, initialState)
};