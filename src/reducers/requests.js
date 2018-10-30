import {
  CREATE_REQUEST,
  CREATE_REQUEST_FAIL,
  GET_REQUESTS,
  GET_REQUESTS_FAIL,
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

    case GET_REQUESTS:
      return {
        ...state,
        requests: action.requests
      };

    case GET_REQUESTS_FAIL:
      return {
        ...state,
        requests: []
      };

    case DELETE_REQUEST_ERROR_MESSAGE:
      return {
        ...state,
        error: {}
      };

    default: return state;
  }
};
