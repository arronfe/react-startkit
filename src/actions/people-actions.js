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

export {
  addPerson
}