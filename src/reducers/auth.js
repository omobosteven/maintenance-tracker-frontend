import isEmpty from 'is-empty';
import {
  SET_CURRENT_USER,
  DELETE_ERROR_MESSAGE,
  SET_CURRENT_USER_FAIL
} from '../constants/types';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    case SET_CURRENT_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error
      };

    case DELETE_ERROR_MESSAGE:
      return {
        error: {}
      };

    default: return state;
  }
};
