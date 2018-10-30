import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';

const GuestNavigation = () => (
  <React.Fragment>
    <li><Link to={routes.SIGN_UP}>SignUp</Link></li>
    <li><Link to={routes.SIGN_IN}>Login</Link></li>
  </React.Fragment>
);

export default GuestNavigation;
