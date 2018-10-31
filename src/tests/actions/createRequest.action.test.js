import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import createRequestAction, { deleteErrorMessages } from '../../actions/createRequest.action';
import {
  CREATE_REQUEST, CREATE_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create Request Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch CREATE_REQUEST when createRequest action is successful', (done) => {
    const { request, createRequestData } = mockData;
    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
      status: 201,
      response: { data: request }
    });

    const expectedActions = [{
      type: CREATE_REQUEST,
      request
    }];

    const store = mockStore({});
    store.dispatch(createRequestAction(createRequestData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch CREATE_REQUEST_FAIL when createRequest action is not successful', (done) => {
    const { createRequestData, requestError } = mockData;
    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
      status: 400,
      response: requestError
    });

    const expectedActions = [{
      type: CREATE_REQUEST_FAIL,
      error: requestError
    }];

    const store = mockStore({});
    store.dispatch(createRequestAction(createRequestData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch DELETE_ERROR_MESSAGE when user clears errors', () => {
    const action = deleteErrorMessages();

    expect(action).toEqual({
      type: DELETE_REQUEST_ERROR_MESSAGE,
    });
  });
});
