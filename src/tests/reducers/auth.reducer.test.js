import authReducer from '../../reducers/auth';
import {
  SET_CURRENT_USER,
  SET_CURRENT_USER_FAIL,
  DELETE_ERROR_MESSAGE,
} from '../../constants/types';
import mockData from '../__mocks__/mockData';

describe('Auth reducer', () => {
  it('should return the initial state', (done) => {
    expect(authReducer(undefined, {})).toEqual({
      isAuthenticated: false, user: {}, error: {}
    });
    done();
  });

  it('should set the current user when passed SET_CURRENT_USER', (done) => {
    const state = {};
    const user = mockData.signUpData;
    const action = {
      type: SET_CURRENT_USER,
      user
    };

    const newState = authReducer(state, action);
    expect(newState.isAuthenticated).toEqual(true);
    expect(newState.user.username).toEqual('blaze');
    expect(newState.user.email).toEqual('blaze@gmail.com');
    expect(newState.user.password).toEqual('password');
    expect(newState.user.password_confirmation).toEqual('password');
    done();
  });


  it('should not set the current user when passed SET_CURRENT_USER_FAIL', (done) => {
    const state = {};
    const { error } = mockData;
    const action = {
      type: SET_CURRENT_USER_FAIL,
      error
    };

    const newState = authReducer(state, action);
    expect(newState.isAuthenticated).toEqual(false);
    expect(newState.error.username).toEqual(error.username);
    done();
  });


  it('should set error to an empty object when passed DELETE_ERROR_MESSAGE', (done) => {
    const state = {};
    const action = {
      type: DELETE_ERROR_MESSAGE
    };

    const newState = authReducer(state, action);
    expect(newState.error).toEqual({});
    done();
  });
});
