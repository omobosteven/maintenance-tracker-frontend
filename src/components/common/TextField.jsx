import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({
  field, value, error, type, onChange, placeholder, label
}) => (
  <React.Fragment>
    <div className="form-group">
      <label htmlFor={field}>{label}</label>
      <input
        className="form-control"
        type={type}
        name={field}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
    { error && <p className="display-error">{error}</p>}
  </React.Fragment>
);

TextField.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.instanceOf(Array),
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default TextField;
