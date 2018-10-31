import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import routes from '../../constants/routes';
import ValidateFormInputs from '../../validations/ValidateAuthInputs';
import ErrorAlertNotification from '../common/ErrorAlertNotification';
import loginAction, {
  deleteErrorMessages
} from '../../actions/auth/login.action';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
  }

  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  onSubmit = (event) => {
    const { action } = this.props;
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      action.loginUser(this.state);
    }
  };

  handleDelete = () => {
    const { action } = this.props;
    action.deleteError();
    this.setState({
      password: ''
    });
  };

  isValid = () => {
    const { errors, isValid } = ValidateFormInputs.loginInput(
      this.state
    );

    if (!isValid) {
      this.setState({ errors, password: '' });
    }

    return isValid;
  };

  render() {
    const { auth, error } = this.props;
    const {
      email, password, errors
    } = this.state;

    if (auth) {
      return <Redirect to={routes.USER_REQUESTS} />;
    }

    return (
      <section className="section-form container">
        {
          (error && error.message) ? (
            <ErrorAlertNotification
              id="errorNotify"
              errors={error.message}
              onClick={this.handleDelete}
            />
          ) : ''
        }
        <div className="row card-form">
          <form className="signup-form">
            <h2 className="form-title">User Login</h2>
            <TextField
              className="email"
              error={errors.email}
              label="Email"
              field="email"
              value={email}
              onChange={this.onChange}
              placeholder="Your email"
              type="email"
            />
            <TextField
              className="password"
              error={errors.password}
              label="Password"
              field="password"
              value={password}
              onChange={this.onChange}
              placeholder="Your password"
              type="password"
            />
            <div className="submit-btn">
              <input className="submit" type="submit" value="Login" onClick={this.onSubmit} />
              <p className="form-info">
                Not registered ? create an account
                <Link to={routes.SIGN_UP} className="form-link"> Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

LoginForm.propTypes = {
  auth: PropTypes.bool,
  error: PropTypes.instanceOf(Object),
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  error: state.auth.error
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      loginUser: loginAction,
      deleteError: deleteErrorMessages
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(LoginForm);
