import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import adminRequestAction from '../../../actions/adminRequest.action';
import fetchSingleRequestAction from '../../../actions/fetchSingleRequest.action';

export class AdminRequestStatus extends Component {
  onSetStatus = (type) => {
    const { action, requestId } = this.props;
    action.setRequestStatus(parseInt(requestId, 10), type)
      .then((res) => {
        if (res.status === 200) {
          action.fetchRequest(requestId, 1);
        }
      });
  }

  render() {
    const { status } = this.props;
    return (
      <div className="admin-btn">
        <button
          className="btn btn-approve"
          type="button"
          disabled={status === 2 || status === 4}
          onClick={() => this.onSetStatus('approve')}
        >
          Approve
          <i className="mdi mdi-thumb-up-outline" />
        </button>
        <button
          className="btn btn-reject"
          type="button"
          disabled={status === 3 || status === 4}
          onClick={() => this.onSetStatus('disapprove')}
        >
          Disapprove
          <i className="mdi mdi-window-close" />
        </button>
        <button
          className="btn btn-resolve"
          type="button"
          disabled={status === 1 || status === 3 || status === 4}
          onClick={() => this.onSetStatus('resolve')}
        >
          Resolve
          <i className="mdi mdi-check" />
        </button>
      </div>);
  }
}

AdminRequestStatus.propTypes = {
  status: PropTypes.number,
  action: PropTypes.instanceOf(Object),
  requestId: PropTypes.string
};

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      setRequestStatus: adminRequestAction,
      fetchRequest: fetchSingleRequestAction
    },
    dispatch
  )
});

export default connect(null, matchDispatchToProps)(AdminRequestStatus);
