import axios from 'axios';
import toastr from 'toastr';
import config from '../config';
import {
  CREATE_REQUEST, CREATE_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../constants/types';

export const createRequest = request => ({
  type: CREATE_REQUEST,
  request
});

export const createRequestError = error => ({
  type: CREATE_REQUEST_FAIL,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_REQUEST_ERROR_MESSAGE
});

const createRequestAction = (requestDetails, history) => dispatch => axios.post(
  `${config.apiUrl}/users/requests`,
  requestDetails
)
  .then((response) => {
    const { message } = response.data;
    toastr.success(message);
    dispatch(createRequest(response.data.data));
    history.push('/');
  })
  .catch((error) => {
    dispatch(createRequestError(error.response.data));
  });

export default createRequestAction;
