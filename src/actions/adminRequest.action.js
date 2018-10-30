import axios from 'axios';
import toastr from 'toastr';
import config from '../config';
import {
  SET_REQUEST_STATUS, SET_REQUEST_STATUS_FAIL,
  DELETE_REQUEST_ERROR_MESSAGE
} from '../constants/types';

export const setRequestStatus = () => ({
  type: SET_REQUEST_STATUS
});

export const setRequestStatusError = error => ({
  type: SET_REQUEST_STATUS_FAIL,
  error
});

export const deleteErrorMessages = () => ({
  type: DELETE_REQUEST_ERROR_MESSAGE
});

const adminRequestAction = (id, type) => (dispatch) => {
  const url = `${config.apiUrl}/requests/${id}/${type}`;
  return axios.put(url)
    .then((response) => {
      const { message } = response.data;
      toastr.success(message);
      dispatch(setRequestStatus());
      return response;
    })
    .catch((error) => {
      dispatch(setRequestStatusError(error.response.data));
    });
};

export default adminRequestAction;
