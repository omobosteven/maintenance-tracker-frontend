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

export const getRequestsError = () => ({
  type: GET_REQUESTS_FAIL,
});

export const deleteErrorMessages = () => ({
  type: DELETE_REQUEST_ERROR_MESSAGE
});

const fetchRequestsAction = userRole => (dispatch) => {
  const url = userRole === 1 ? `${config.apiUrl}/requests` : `${config.apiUrl}/users/requests`;
  return axios.get(url)
    .then((response) => {
      dispatch(getRequests(response.data.data.requests));
    })
    .catch((error) => {
      dispatch(getRequestsError(error.response.data));
    });
};

export default fetchRequestsAction;
