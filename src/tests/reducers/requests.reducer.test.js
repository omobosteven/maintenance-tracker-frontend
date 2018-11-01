import requestReducer from '../../reducers/requests';
import {
  CREATE_REQUEST,
  CREATE_REQUEST_FAIL,
  GET_REQUEST,
  GET_REQUESTS,
  UPDATE_REQUEST,
  GET_REQUESTS_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

describe('Request Reducer', () => {
  it('should return the initial state', (done) => {
    expect(requestReducer(undefined, {})).toEqual({
      requests: [], request: null, error: {}
    });
    done();
  });


  it('should set the created request when passed CREATE_REQUEST', (done) => {
    const state = {};
    const request = mockData.createRequestData;
    const action = {
      type: CREATE_REQUEST,
      request
    };

    const newState = requestReducer(state, action);
    expect(newState.created.type).toEqual('1');
    done();
  });

  it('should set the updated request when passed UPDATE_REQUEST', (done) => {
    const state = {};
    const request = mockData.createRequestData;
    const action = {
      type: UPDATE_REQUEST,
      request
    };

    const newState = requestReducer(state, action);
    expect(newState.updated.type).toEqual('1');
    done();
  });


  it('should set the error when passed CREATE_REQUEST_FAIL', (done) => {
    const state = {};
    const { requestError } = mockData;
    const action = {
      type: CREATE_REQUEST_FAIL,
      error: requestError
    };

    const newState = requestReducer(state, action);
    expect(newState.error.message).toEqual(requestError.message);
    done();
  });

  it('should set requests when passed GET_REQUESTS', (done) => {
    const state = {};
    const { requests } = mockData;
    const action = {
      type: GET_REQUESTS,
      requests
    };

    const newState = requestReducer(state, action);
    expect(newState.requests[0].category).toEqual('electronics');
    done();
  });

  it('should set request when passed GET_REQUEST', (done) => {
    const state = {};
    const { request } = mockData;
    const action = {
      type: GET_REQUEST,
      request
    };

    const newState = requestReducer(state, action);
    expect(newState.request.category).toEqual('electronics');
    done();
  });

  it('should set request to null when passed GET_REQUESTS_FAIL', (done) => {
    const state = {};
    const { requestError } = mockData;
    const action = {
      type: GET_REQUESTS_FAIL,
      error: requestError
    };

    const newState = requestReducer(state, action);
    expect(newState.requests).toEqual([]);
    done();
  });

  it('should set error to an empty object when passed DELETE_REQUEST_ERROR_MESSAGE', (done) => {
    const state = {};
    const action = {
      type: DELETE_REQUEST_ERROR_MESSAGE
    };

    const newState = requestReducer(state, action);
    expect(newState.error).toEqual({});
    done();
  });
});
