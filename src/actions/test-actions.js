/**
 * Created by arron on 2017/7/19.
 */
import * as types from './action-types';

const addTest = test => {
  return {
    type: types.ADD_TEST,
    test
  }
};

export {
  addTest
}