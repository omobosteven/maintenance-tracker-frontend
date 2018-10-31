import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import fetchRequestsAction, { deleteErrorMessages } from '../../actions/fetchRequests.action';
import {
  GET_REQUESTS, GET_REQUESTS_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create Request Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch GET_REQUESTS when fetchRequests action is successful', (done) => {
    const { requests } = mockData;
    const userRole = 2;

    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
      status: 200,
      response: { data: { requests } }
    });

    const expectedActions = [{
      type: GET_REQUESTS,
      requests
    }];

    const store = mockStore({});
    store.dispatch(fetchRequestsAction(userRole))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch GET_REQUESTS for admin when fetchRequests action is successful', (done) => {
    const { requests } = mockData;
    const userRole = 1;

    moxios.stubRequest(`${config.apiUrl}/requests`, {
      status: 200,
      response: { data: { requests } }
    });

    const expectedActions = [{
      type: GET_REQUESTS,
      requests
    }];

    const store = mockStore({});
    store.dispatch(fetchRequestsAction(userRole))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch GET_REQUESTS_FAIL when updateRequest action is not successful', (done) => {
    const { requestError } = mockData;
    const userRole = 2;

    moxios.stubRequest(`${config.apiUrl}/users/requests`, {
      status: 404,
      response: requestError
    });

    const expectedActions = [{
      type: GET_REQUESTS_FAIL
    }];

    const store = mockStore({});
    store.dispatch(fetchRequestsAction(userRole))
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
