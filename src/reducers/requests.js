import {
  CREATE_REQUEST,
  CREATE_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../constants/types';

const initialState = {
  requests: [],
  request: null,
  error: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REQUEST:
      return {
        ...state,
        created: action.request
      };

    case CREATE_REQUEST_FAIL:
      return {
        ...state,
        error: action.error
      };

    case DELETE_REQUEST_ERROR_MESSAGE:
      return {
        ...state,
        error: {}
      };

    default: return state;
  }
};
