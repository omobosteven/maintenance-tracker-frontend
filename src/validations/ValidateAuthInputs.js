/* eslint-disable class-methods-use-this */
import Validator from 'validatorjs';

class ValidateAuthInput {
  /**
   * @description Validates create user inputs
   *
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   *
   * @return {Function} next
   */
  static signupInput(formInput) {
    const { username, email, password, password_confirmation } = formInput; // eslint-disable-line

    const data = {
      username,
      email,
      password,
      password_confirmation
    };

    const rules = {
      username: 'required|alpha_dash|min:2|max:20',
      email: 'required|email',
      password: 'required|min:6|confirmed',
      password_confirmation: 'required'
    };


    const validation = new Validator(data, rules);

    const isValid = false;

    if (validation.passes()) {
      return {
        isValid: true
      };
    }

    const errors = validation.errors.all();

    return {
      isValid,
      errors
    };
  }
}

export default ValidateAuthInput;
