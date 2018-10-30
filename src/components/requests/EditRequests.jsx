import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import TextField from '../common/TextField';
import ValidateRequestInput from '../../validations/ValidateRequestInput';
import ErrorAlertNotification from '../common/ErrorAlertNotification';
import updateRequestAction, {
  deleteErrorMessages
} from '../../actions/editRequest.action';
import fetchSingleRequestAction from '../../actions/fetchSingleRequest.action';

export class EditRequestForm extends Component {
  state = {
    type: '',
    category: '',
    description: '',
    item: '',
    errors: {}
  }

  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  };

  onSubmit = (event) => {
    const { action, history, match } = this.props;
    event.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      action.updateRequest(this.state, match.params.id, history);
    }
  };

  onCancel = () => {
    const { history, match } = this.props;
    history.push(`/users/requests/${match.params.id}`);
  };

  componentDidMount = () => {
    const { match, action } = this.props;
    action.fetchRequest(match.params.id).then((res) => {
      const {
        typeId, category, item, description
      } = res.data.data.request;
      this.setState({
        type: `${typeId}`,
        category,
        item,
        description
      });
    });
  }

  handleDelete = () => {
    const { action } = this.props;
    action.deleteError();
  };

  isValid = () => {
    const { errors, isValid } = ValidateRequestInput.createInput(
      this.state
    );

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  };

  render() {
    const { error } = this.props;
    const {
      type, category, item, description, errors
    } = this.state;

    const types = [{ id: 1, type: 'Repair' }, { id: 2, type: 'Maintenance' }];
    const categories = [
      { id: 'computers', category: 'Computers' },
      { id: 'electronics', category: 'Electronics' },
      { id: 'furnitures', category: 'Furniture' }
    ];

    return (
      <section className="section-form container">
        {
          (error && error.message) ? (
            <ErrorAlertNotification
              errors={error.message}
              onClick={this.handleDelete}
            />
          ) : ''
        }
        <div className="row card-form">
          <form className="signup-form">
            <h2 className="form-title">Modify Request</h2>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select
                className="form-control"
                name="type"
                onChange={this.onChange}
                value={type}
              >
                {
                  types.map(data => (
                    <option key={data.id} value={data.id}>
                      {data.type}
                    </option>))
                }
              </select>
            </div>
            <p className="error">{errors.type}</p>
            <div className="form-group">
              <label htmlFor="category">Category</label>
              <select
                className="form-control"
                name="category"
                onChange={this.onChange}
                value={category}
              >
                {
                  categories.map(data => (
                    <option key={data.id} value={data.id}>
                      {data.category}
                    </option>))
                }
              </select>
            </div>
            <p className="error">{errors.type}</p>
            <TextField
              error={errors.item}
              label="Item"
              field="item"
              value={item}
              onChange={this.onChange}
              placeholder="Enter item"
              type="text"
            />
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                name="description"
                value={description}
                onChange={this.onChange}
                placeholder="Enter a description of the problem"
                rows="4"
                data-gramm_editor="false"
              />
            </div>
            { errors.description && <p className="display-error">{errors.description}</p> }
            <div className="submit-btn update-btn">
              <input type="submit" value="Modify" onClick={this.onSubmit} />
              <input type="button" value="Cancel" onClick={this.onCancel} />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

EditRequestForm.propTypes = {
  history: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
  error: PropTypes.instanceOf(Object),
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  error: state.requests.error
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      updateRequest: updateRequestAction,
      fetchRequest: fetchSingleRequestAction,
      deleteError: deleteErrorMessages
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(EditRequestForm);
