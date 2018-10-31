import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import config from '../../config';
import signupAction, { deleteErrorMessages } from '../../actions/auth/signup.action';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAIL,
  DELETE_ERROR_MESSAGE
} from '../../constants/types';
import mockData from '../__mocks__/mockData';
import mockCookieStorage from '../__mocks__/mockCookieStorage';

const mockStore = configureMockStore([thunk]);

window.Cookie = mockCookieStorage;

describe('Signup Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch SET_CURRENT_USER when signup action is successful', (done) => {
    const { authResponse, signUpData } = mockData;
    moxios.stubRequest(`${config.apiUrl}/auth/signup`, {
      status: 201,
      response: authResponse
    });

    const expectedActions = [{
      type: SET_CURRENT_USER,
      user: jwt.decode(authResponse.data.data.token)
    }];
    const store = mockStore({});
    store.dispatch(signupAction(signUpData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch SET_CURRENT_USER_FAIL when signup is not successful', (done) => {
    const { error, signUpData } = mockData;
    moxios.stubRequest(`${config.apiUrl}/auth/signup`, {
      status: 400,
      response: error
    });

    const expectedActions = [{
      type: SET_CURRENT_USER_FAIL,
      error
    }];
    const store = mockStore({});
    store.dispatch(signupAction(signUpData))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch DELETE_ERROR_MESSAGE when user enters valid credentials', () => {
    const action = deleteErrorMessages();

    expect(action).toEqual({
      type: DELETE_ERROR_MESSAGE,
    });
  });
});
