import * as constants from './constants';
import { fromJS } from 'immutable';
const defaultState = fromJS({});
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      break;
  }
  return state;
};