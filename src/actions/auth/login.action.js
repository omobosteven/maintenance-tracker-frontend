import axios from 'axios';
import Cookie from 'cookies-js';
import jwt from 'jsonwebtoken';
import toastr from 'toastr';
import config from '../../config';
import routes from '../../constants/routes';
import {
  SET_CURRENT_USER, SET_CURRENT_USER_FAIL, DELETE_ERROR_MESSAGE
} from '../../constants/types';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  user
});

export const setCurrentUserError = error => ({
  type: SET_CURRENT_USER_FAIL,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_ERROR_MESSAGE
});

const loginAction = userDetails => dispatch => axios.post(`${config.apiUrl}${routes.SIGN_IN}`,
  userDetails)
  .then((response) => {
    const { message } = response.data;
    const { token } = response.data.data;
    Cookie.set('jwtToken', token);
    toastr.success(message);
    dispatch(setCurrentUser(jwt.decode(token)));
  })
  .catch((error) => {
    dispatch(setCurrentUserError(error.response.data));
  });

export default loginAction;
