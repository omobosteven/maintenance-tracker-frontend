import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import updateRequestAction, { deleteErrorMessages } from '../../actions/editRequest.action';
import {
  UPDATE_REQUEST, UPDATE_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create Request Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch UPDATE_REQUEST when updateRequest action is successful', (done) => {
    const { request, createRequestData } = mockData;
    const id = 1;

    moxios.stubRequest(`${config.apiUrl}/users/requests/${id}`, {
      status: 200,
      response: request
    });

    const expectedActions = [{
      type: UPDATE_REQUEST,
      request
    }];

    const store = mockStore({});
    store.dispatch(updateRequestAction(createRequestData, id))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch UPDATE_REQUEST_FAIL when updateRequest action is not successful', (done) => {
    const { createRequestData, requestError } = mockData;
    const id = 1;

    moxios.stubRequest(`${config.apiUrl}/users/requests/${id}`, {
      status: 400,
      response: requestError
    });

    const expectedActions = [{
      type: UPDATE_REQUEST_FAIL,
      error: requestError
    }];

    const store = mockStore({});
    store.dispatch(updateRequestAction(createRequestData, id))
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
