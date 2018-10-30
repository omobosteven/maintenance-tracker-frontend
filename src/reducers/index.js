import { combineReducers } from 'redux';
import auth from './auth';
import {
  LOGOUT_USER
} from '../constants/types';

const appReducer = combineReducers({
  auth
});

const initialState = appReducer({}, {});

export const rootReducer = (state, action) => {
  if (action.type === LOGOUT_USER) {
    state = initialState;
  }

  return appReducer(state, action);
};

export default rootReducer;
