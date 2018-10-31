import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import routes from '../../constants/routes';
import logoutAction from '../../actions/auth/logout.action';

export class UserNavigation extends Component {
  onLogout = () => {
    const { logoutUser } = this.props;
    logoutUser();
  }


  render() {
    const { userRole } = this.props;

    return (
      <React.Fragment>
        {userRole !== 1 && <li><Link to={routes.CREATE_REQUESTS}>Make Request</Link></li>}
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
  userRole: PropTypes.number,
  logoutUser: PropTypes.func,
};

const mapStateToProps = state => ({
  userRole: state.auth.user.roleId
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    logoutUser: logoutAction
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(UserNavigation);
