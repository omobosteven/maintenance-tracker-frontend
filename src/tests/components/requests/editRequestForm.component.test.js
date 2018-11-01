import React from 'react';
import { shallow } from 'enzyme';
import { EditRequestForm } from '../../../components/requests/EditRequests';
import mockData from '../../__mocks__/mockData';

let wrapper;

const setProps = {
  error: {},
  action: {
    updateRequest: jest.fn(),
    fetchRequest: jest.fn().mockResolvedValue(Promise.resolve()),
    deleteError: jest.fn
  },
  match: {
    params: { id: 1 }
  },
  history: {
    push: jest.fn
  }
};

describe('EditRequestForm component', () => {
  beforeEach(() => {
    const props = { ...setProps };
    wrapper = shallow(<EditRequestForm {...props} />);
  });

  it('should render the EditRequestForm component', () => {
    const props = { ...setProps };

    wrapper = shallow(<EditRequestForm {...props} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.exists()).toBe(true);
  });

  it('should set item when item changes', () => {
    const event = {
      target: {
        name: 'item',
        value: 'laptop'
      }
    };

    const item = wrapper.find('.item');
    item.simulate('change', event);

    const expectedItem = 'laptop';

    expect(wrapper.instance().state.item).toBe(expectedItem);
  });

  it('should set description when descriprion changes after receiving error', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'description',
        value: 'laptop'
      }
    };

    const description = wrapper.find('.item');

    description.simulate('change', event);

    wrapper.setState({ errors: { [event.target.name]: ['mock'] } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.name])
      .toBe(event.target.value);
  });

  it('should update request when correct creadentials are supplied', () => {
    const { createRequestData } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };

    const updateRequest = wrapper.find('.submit');

    wrapper.setState(createRequestData);
    updateRequest.simulate('click', event);

    expect(wrapper.instance().state.item).toBe(createRequestData.item);
  });

  it('should return error for invalid form submission', () => {
    wrapper.find('.submit').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });

  it('should delete error message if there is an error', () => {
    const props = {
      ...setProps,
      error: {
        message: 'There is an error'
      }
    };
    wrapper = shallow(<EditRequestForm {...props} />);

    const deleteErrorMessage = wrapper.find('#errorNotify');
    deleteErrorMessage.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });


  it('should cancel update', () => {
    const props = {
      ...setProps
    };
    wrapper = shallow(<EditRequestForm {...props} />);

    const cancelUpdate = wrapper.find('.cancel');
    cancelUpdate.simulate('click');

    expect(wrapper).toMatchSnapshot();
  });
});
