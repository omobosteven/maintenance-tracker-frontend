import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import config from '../../config';
import adminRequestAction, { deleteErrorMessages } from '../../actions/adminRequest.action';
import {
  SET_REQUEST_STATUS, SET_REQUEST_STATUS_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Create Request Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch SET_REQUEST_STATUS when adminRequest action is successful', (done) => {
    const { request } = mockData;
    const id = 1;
    const type = 'approve';

    moxios.stubRequest(`${config.apiUrl}/requests/${id}/${type}`, {
      status: 200,
      response: request
    });

    const expectedActions = [{
      type: SET_REQUEST_STATUS
    }];

    const store = mockStore({});
    store.dispatch(adminRequestAction(id, type))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch GET_REQUESTS_FAIL when updateRequest action is not successful', (done) => {
    const { requestError } = mockData;
    const id = 1;
    const type = 'approve';

    moxios.stubRequest(`${config.apiUrl}/requests/${id}/${type}`, {
      status: 404,
      response: requestError
    });

    const expectedActions = [{
      type: SET_REQUEST_STATUS_FAIL,
      error: requestError
    }];

    const store = mockStore({});
    store.dispatch(adminRequestAction(id, type))
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
