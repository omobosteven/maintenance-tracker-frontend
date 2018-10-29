import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';

const LandingPage = () => (
  <section className="row main-content">
    <h1 className="main-heading">Maintenance Tracker</h1>
    <p className="main-text">Lorem Ipsum cool text right here...</p>
    <div className="main-buttons">
      <Link to={routes.SIGN_UP} className="btn main-btn">Signup</Link>
      <Link to={routes.SIGN_IN} className="btn main-btn">Login</Link>
    </div>
  </section>
);

export default LandingPage;
