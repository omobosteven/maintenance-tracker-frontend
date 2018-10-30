import React from 'react';
import PropTypes from 'prop-types';

const UserRequestStatus = ({ status }) => {
  const getStatusText = {
    statusType: '',
    statusClassname: ''
  };

  switch (status) {
    case 1:
      getStatusText.statusType = 'Pending';
      getStatusText.statusClassname = 'request-pending';
      break;
    case 2:
      getStatusText.statusType = 'Approved';
      getStatusText.statusClassname = 'request-approved';
      break;
    case 3:
      getStatusText.statusType = 'Disapproved';
      getStatusText.statusClassname = 'request-disapproved';
      break;
    case 4:
      getStatusText.statusType = 'Resolved';
      getStatusText.statusClassname = 'request-resolved';
      break;
    default:
  }

  return (
    <div className="request-status">
      <p className={getStatusText.statusClassname}>{getStatusText.statusType}</p>
    </div>
  );
};

UserRequestStatus.propTypes = {
  status: PropTypes.number
};

export default UserRequestStatus;
