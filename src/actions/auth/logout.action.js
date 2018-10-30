import Cookie from 'cookies-js';
import { LOGOUT_USER } from '../../constants/types';

export const logoutCurrentUser = () => ({
  type: LOGOUT_USER
});

const logoutAction = () => (dispatch) => {
  Cookie.expire('jwtToken');
  dispatch(logoutCurrentUser({}));
};

export default logoutAction;
