import axios from 'axios';
import Cookie from 'cookies-js';

const setAuthorizationToken = () => {
  axios.interceptors.request.use((config) => {
    const token = Cookie.get('jwtToken');

    if (token) {
      config.headers['x-access-token'] = token;    // eslint-disable-line
    }

    return config;
  }, err => (Promise.reject(err)));
};

export default setAuthorizationToken;
