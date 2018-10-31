
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { LOGOUT_USER } from '../../constants/types';
import logoutAction from '../../actions/auth/logout.action';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

it('should dispatch LOGOUT_USER action', () => {
  const expectedActions = [{
    type: LOGOUT_USER,
  }];
  const store = mockStore({});
  store.dispatch(logoutAction());
  expect(store.getActions()).toEqual(expectedActions);
});
