import axios from 'axios';
import config from '../config';
import {
  GET_REQUEST, GET_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../constants/types';

export const getRequest = request => ({
  type: GET_REQUEST,
  request
});

export const getRequestError = error => ({
  type: GET_REQUEST_FAIL,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_REQUEST_ERROR_MESSAGE
});

const fetchSingleRequestsAction = id => dispatch => axios.get(
  `${config.apiUrl}/users/requests/${id}`
)
  .then((response) => {
    dispatch(getRequest(response.data.data.request));
  })
  .catch((error) => {
    dispatch(getRequestError(error.response.data));
  });

export default fetchSingleRequestsAction;
