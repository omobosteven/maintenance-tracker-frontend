import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'toastr/build/toastr.css';
import store from './store/index';
import AppRoutes from './routers/AppRoutes';
import setAuthorizationToken from './utils/authorization';
import setCurrentUserToStore from './utils/setCurrentUserToStore';
import './styles/scss/App.scss';

setCurrentUserToStore(store);

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('app')
  );
