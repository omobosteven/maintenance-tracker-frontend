import React from 'react';
import PropTypes from 'prop-types';

const ErrorAlertNotification = (props) => {
  const { errors } = props;
  return (
    <div className="row alert fail">
      <p>{errors}</p>
      <button type="button" className="closeAlert" onClick={() => props.onClick()}>&times;</button>
    </div>);
};

ErrorAlertNotification.propTypes = {
  errors: PropTypes.string,
  onClick: PropTypes.func
};

export default ErrorAlertNotification;
