/**
 * Created by arron on 2017/7/18.
 */
import people from './people-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  people
});

export default rootReducer;