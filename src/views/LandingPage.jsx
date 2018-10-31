import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import routes from '../constants/routes';

export const LandingPage = (props) => {
  const { auth } = props;
  if (auth) {
    return <Redirect to={routes.USER_REQUESTS} />;
  }

  return (
    <section className="row main-content">
      <h1 className="main-heading">Maintenance Tracker</h1>
      <p className="main-text">Need Something fixed? Make a request.</p>
      <div className="main-buttons">
        <Link to={routes.SIGN_UP} className="btn main-btn">Signup</Link>
        <Link to={routes.SIGN_IN} className="btn main-btn">Login</Link>
      </div>
    </section>
  );
};

LandingPage.propTypes = {
  auth: PropTypes.bool
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(LandingPage);
