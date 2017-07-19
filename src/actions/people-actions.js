/**
 * Created by arron on 2017/7/18.
 */
import * as types from './action-types';

const addPerson = person => {
  return {
    type: types.ADD_PERSON,
    person
  }
};


// redux-thunk function

const testThunk = (person) => {
  return (dispatch, getState) => {
    dispatch(addPerson(person))
  }
};

export {
  addPerson,
  testThunk
}