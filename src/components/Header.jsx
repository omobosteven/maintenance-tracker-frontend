import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../images/logo.png';
import routes from '../constants/routes';

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
    return (
      <header>
        <nav className="container">
          <div className="row">
            <div className="header-logo">
              <Link to="/">
                <img src={appLogo} alt="maintanace-tracker logo" className="logo" />
              </Link>
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
              <li><Link to={routes.SIGN_UP}>SignUp</Link></li>
              <li><Link to={routes.SIGN_IN}>Login</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
