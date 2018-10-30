import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import routes from '../../constants/routes';
import ValidateFormInputs from '../../validations/ValidateAuthInputs';
import ErrorAlertNotification from '../common/ErrorAlertNotification';
import signupAction, {
  deleteErrorMessages
} from '../../actions/auth/signup.action';

export class SignupForm extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
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
      action.signupUser(this.state);
    }
  };

  handleDelete = () => {
    const { action } = this.props;
    action.deleteError();
    this.setState({
      password: '',
      password_confirmation: ''
    });
  };

  isValid = () => {
    const { errors, isValid } = ValidateFormInputs.signupInput(
      this.state
    );

    if (!isValid) {
      this.setState({ errors, password: '', password_confirmation: '' });
    }

    return isValid;
  };

  render() {
    const { auth, error } = this.props;
    const {
      username, email, password, password_confirmation, errors // eslint-disable-line
    } = this.state;

    if (auth) {
      return <Redirect to={routes.USER_REQUESTS} />;
    }

    return (
      <section className="section-form container">
        {
          (error && error.message) ? (
            <ErrorAlertNotification
              errors={error.message}
              onClick={this.handleDelete}
            />
          ) : ''
        }
        <div className="row card-form">
          <form className="signup-form">
            <h2 className="form-title">Create an account</h2>
            <TextField
              error={errors.username}
              label="Username"
              field="username"
              value={username}
              onChange={this.onChange}
              placeholder="Your username"
              type="text"
            />
            <TextField
              error={errors.email}
              label="Email"
              field="email"
              value={email}
              onChange={this.onChange}
              placeholder="Your email"
              type="email"
            />
            <TextField
              error={errors.password}
              label="Password"
              field="password"
              value={password}
              onChange={this.onChange}
              placeholder="Your password"
              type="password"
            />
            <TextField
              error={errors.password_confirmation}
              label="Confirm Password"
              field="password_confirmation"
              value={password_confirmation} // eslint-disable-line
              onChange={this.onChange}
              placeholder="Confirm your password"
              type="password"
            />
            <div className="submit-btn">
              <input type="submit" value="Create account" onClick={this.onSubmit} />
              <p className="form-info">
                Already have an account ?
                <Link to={routes.SIGN_IN} className="form-link"> Login</Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

SignupForm.propTypes = {
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
      signupUser: signupAction,
      deleteError: deleteErrorMessages
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(SignupForm);
