import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '../../constants/routes';
import logoutAction from '../../actions/auth/logout.action';

class UserNavigation extends Component {
  onLogout = (event) => {
    const { logoutUser } = this.props;
    event.preventDefault();
    logoutUser();
  }

  render() {
    return (
      <React.Fragment>
        <li><Link to={routes.CREATE_REQUESTS}>Make Request</Link></li>
        <li><Link to={routes.USER_REQUESTS}>View Requests</Link></li>
        <li>
          <Link
            to="#"
            id="logout"
            onClick={this.onLogout}
          >
            Logout
          </Link>
        </li>
      </React.Fragment>
    );
  }
}

UserNavigation.propTypes = {
  logoutUser: PropTypes.func,
};

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logoutUser: logoutAction
  },
  dispatch
);

export default connect(null, mapDispatchToProps)(UserNavigation);
