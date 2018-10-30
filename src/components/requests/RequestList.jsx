import React from 'react';
import { Link } from 'react-router-dom';
import cap from 'capitalize';
import PropTypes from 'prop-types';

const RequestList = ({
  id, refNo, item, status, type
}) => {
  const requestClassName = {
    statusType: '',
    statusClassname: ''
  };

  switch (status) {
    case 1:
      requestClassName.statusType = 'pending';
      requestClassName.statusClassname = 'status-pending';
      break;
    case 2:
      requestClassName.statusType = 'approved';
      requestClassName.statusClassname = 'status-approved';
      break;
    case 3:
      requestClassName.statusType = 'disapproved';
      requestClassName.statusClassname = 'status-disapproved';
      break;
    case 4:
      requestClassName.statusType = 'resolved';
      requestClassName.statusClassname = 'status-resolved';
      break;
    default:
  }

  return (
    <li className={`request ${requestClassName.statusType}`}>
      <Link to={`/requests/${id}`} className="request-item">
        <p>{`#${refNo}`}</p>
        <p>{type === 1 ? 'Repair' : 'Maintenance'}</p>
        <p>{cap(item)}</p>
        <p className={requestClassName.statusClassname}>{cap(requestClassName.statusType)}</p>
      </Link>
    </li>
  );
};

RequestList.propTypes = {
  id: PropTypes.number,
  refNo: PropTypes.number,
  item: PropTypes.string,
  status: PropTypes.number,
  type: PropTypes.number
};

export default RequestList;
