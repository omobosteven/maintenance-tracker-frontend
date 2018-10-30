import axios from 'axios';
import config from '../config';
import {
  GET_REQUESTS, GET_REQUESTS_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../constants/types';

export const getRequests = requests => ({
  type: GET_REQUESTS,
  requests
});

export const getRequestsError = error => ({
  type: GET_REQUESTS_FAIL,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_REQUEST_ERROR_MESSAGE
});

const fetchRequestsAction = () => dispatch => axios.get(
  `${config.apiUrl}/users/requests`
)
  .then((response) => {
    dispatch(getRequests(response.data.data.requests));
  })
  .catch((error) => {
    dispatch(getRequestsError(error.response.data));
  });

export default fetchRequestsAction;
