import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import fetchSingleRequestAction,
{ deleteErrorMessages } from '../../actions/fetchSingleRequest.action';
import {
  GET_REQUEST, GET_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create Request Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch GET_REQUEST when fetchSingleRequest action is successful', (done) => {
    const { request } = mockData;
    const userRole = 2;
    const id = 1;

    moxios.stubRequest(`${config.apiUrl}/users/requests/${id}`, {
      status: 200,
      response: { data: { request } }
    });

    const expectedActions = [{
      type: GET_REQUEST,
      request
    }];

    const store = mockStore({});
    store.dispatch(fetchSingleRequestAction(id, userRole))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });


  it('should dispatch GET_REQUESTS for admin when fetchSingleRequest action is successful',
    (done) => {
      const { request } = mockData;
      const userRole = 1;
      const id = 1;

      moxios.stubRequest(`${config.apiUrl}/requests/${id}`, {
        status: 200,
        response: { data: { request } }
      });

      const expectedActions = [{
        type: GET_REQUEST,
        request
      }];

      const store = mockStore({});
      store.dispatch(fetchSingleRequestAction(id, userRole))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
      done();
    });

  it('should dispatch GET_REQUESTS_FAIL when updateRequest action is not successful', (done) => {
    const { requestError } = mockData;
    const userRole = 2;
    const id = 1;

    moxios.stubRequest(`${config.apiUrl}/users/requests/${id}`, {
      status: 404,
      response: requestError
    });

    const expectedActions = [{
      type: GET_REQUEST_FAIL,
      error: requestError
    }];

    const store = mockStore({});
    store.dispatch(fetchSingleRequestAction(id, userRole))
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
