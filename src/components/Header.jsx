import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import appLogo from '../images/logo.png';
import GuestNavigation from './navigation/GuestNavigation';
import UserNavigation from './navigation/UserNavigation';

export class Header extends Component {
  state = {
    toggleNav: ''
  }

  onToggleNav = (event) => {
    event.preventDefault();
    const { toggleNav } = this.state;
    const toggle = toggleNav ? '' : 'navbar-show';
    this.setState({ toggleNav: toggle });
  };

  render() {
    const { toggleNav } = this.state;
    const { auth } = this.props;

    return (
      <header>
        <nav className="container">
          <div className="row">
            <div className="header-logo">
              <Link to="/">
                <img src={appLogo} alt="maintanace-tracker logo" className="logo" />
              </Link>
              {auth.isAuthenticated && (
                <p className="user">
                  <span>{auth.user.username}</span>
                  <br />
                  Dashboard
                </p>)
              }
              <button
                type="button"
                id="navbar-toggler"
                className="nav-toggle"
                onClick={this.onToggleNav}
              >
                <i className="mdi mdi-view-sequential" />
              </button>
            </div>
            <ul className={`main-nav ${toggleNav}`} id="navbar-collapse">
              {
                auth.isAuthenticated ? <UserNavigation /> : <GuestNavigation />
              }
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  auth: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(Header);
