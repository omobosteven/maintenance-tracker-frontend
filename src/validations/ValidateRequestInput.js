import Validator from 'validatorjs';

class ValidateRequestInput {
  /**
   * @description Validates create request inputs
   *
   * @param {Object} request
   * @param {Object} response
   * @param {Function} next
   *
   * @return {Function} next
   */
  static createInput(formInput) {
    const {
      type, category, description, item,
    } = formInput;

    const data = {
      type: (type && type.trim()),
      category: (category && category.trim().toLowerCase()),
      description: (description && description.trim().toLowerCase()),
      item: (item && item.trim().toLowerCase()),
    };

    const rules = {
      type: ['required', { in: ['1', '2'] }],
      category: 'required|max:20',
      item: 'required|min:2|max:50',
      description: 'required|min:10|max:50',
    };

    const validation = new Validator(data, rules, {
      'in.type': ':attribute field must be either of 1 - repair or 2 - maintenance',
    });

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

export default ValidateRequestInput;
