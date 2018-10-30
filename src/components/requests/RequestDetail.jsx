import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import cap from 'capitalize';
import PropTypes from 'prop-types';
import Loading from '../common/Loading';
import fetchSingleRequestAction from '../../actions/fetchSingleRequest.action';
import routes from '../../constants/routes';

class RequestDetails extends Component {
  componentDidMount = () => {
    const { fetchRequest, match } = this.props;
    fetchRequest(match.params.id);
  }

  render() {
    const { request } = this.props;

    if (!request) {
      return (
        <div>
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }

    const getStatusText = {
      statusType: '',
      statusClassname: ''
    };

    switch (request.statusId) {
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
      <section className="section-details container">
        <div className="row">
          <h2 className="section-heading">Request Details</h2>
        </div>
        <div className="row card-details">
          <Link to={routes.USER_REQUESTS} className="close-link">X</Link>
          { request.statusId === 1
              && (
                <Link to={`/edit-request/${request.requestId}`} className="edit-link">
                  <i className="mdi mdi-pencil-box-outline" />
                  Modify
                </Link>)
          }
          <div className="details user-details">
            <p>
              <span className="details-heading">Ref_no:</span>
              <span className="detail">{`#${request.ref_no}`}</span>
            </p>
            <p>
              <span className="details-heading">Type:</span>
              <span className="detail">{request.type === 1 ? 'Repair' : 'Maintenance'}</span>
            </p>
            <p>
              <span className="details-heading">Category:</span>
              <span className="detail">{cap(request.category)}</span>
            </p>
            <p>
              <span className="details-heading">Item:</span>
              <span className="detail">{cap(request.item)}</span>
            </p>
            <p>
              <span className="details-heading">Description:</span>
              <span className="detail">{request.description}</span>
            </p>
          </div>
          <div className="request-status">
            <p className={getStatusText.statusClassname}>{getStatusText.statusType}</p>
          </div>
        </div>
      </section>
    );
  }
}

RequestDetails.propTypes = {
  fetchRequest: PropTypes.func.isRequired,
  request: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  request: state.requests.request,
});

const matchDispatchToProps = dispatch => bindActionCreators({
  fetchRequest: fetchSingleRequestAction,
}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(RequestDetails);
