import axios from 'axios';
import toastr from 'toastr';
import config from '../config';
import {
  UPDATE_REQUEST, UPDATE_REQUEST_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../constants/types';

export const updateRequest = request => ({
  type: UPDATE_REQUEST,
  request
});

export const updateRequestError = error => ({
  type: UPDATE_REQUEST_FAIL,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_REQUEST_ERROR_MESSAGE
});

const updateRequestAction = (requestDetails, id, history) => dispatch => axios.put(
  `${config.apiUrl}/users/requests/${id}`, requestDetails
)
  .then((response) => {
    const { message } = response.data;
    toastr.success(message);
    dispatch(updateRequest(response.data.data));
    history.push(`/users/requests/${id}`);
  })
  .catch((error) => {
    dispatch(updateRequestError(error.response.data));
  });

export default updateRequestAction;
