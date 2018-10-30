import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import fetchRequestsAction from '../actions/fetchRequests.action';
import Loading from './common/Loading';
import RequestList from './requests/RequestList';

class Requests extends Component {
  componentDidMount = () => {
    const { fetchRequests, userRole } = this.props;
    fetchRequests(userRole);
  }

  render() {
    const { requests } = this.props;

    if (!requests) {
      return (
        <div>
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }

    const { userRole } = this.props;

    return (
      <section className="section-requests container">
        <div className="row">
          <h2 className="section-heading">{ userRole === 1 ? 'All Request' : 'My Requests'}</h2>
        </div>
        <div className="row">
          <ul className="requests-list">
            {
              requests.map(request => (
                <RequestList
                  key={request.requestId}
                  id={request.requestId}
                  refNo={request.ref_no}
                  item={request.item}
                  type={request.typeId}
                  status={request.statusId}
                />
              ))}
          </ul>
        </div>
      </section>
    );
  }
}

Requests.propTypes = {
  userRole: PropTypes.number,
  fetchRequests: PropTypes.func.isRequired,
  requests: PropTypes.instanceOf(Array),
};

const mapStateToProps = state => ({
  requests: state.requests.requests,
  userRole: state.auth.user.roleId
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchRequests: fetchRequestsAction,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Requests);
