import React from 'react';
import loader from '../../images/spinner.gif';

const Loading = () => (
  <div className="row container loader">
    <img src={loader} className="loader-icon" alt="Loading..." />
  </div>
);

export default Loading;
