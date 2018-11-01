import React from 'react';
import { shallow } from 'enzyme';
import { RequestDetails } from '../../../components/requests/RequestDetail';
import mockData from '../../__mocks__/mockData';

describe('Request detail', () => {
  const setProps = {
    fetchRequest: jest.fn(),
    userRole: 2,
    request: mockData.request,
    match: {
      params: 1
    }
  };

  it('should render the RequestDetail component', () => {
    const props = { ...setProps };

    const wrapper = shallow(<RequestDetails {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the Loading component if on request is found', () => {
    const props = { ...setProps, request: null };

    const wrapper = shallow(<RequestDetails {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestDetail component for admin', () => {
    const props = {
      ...setProps,
      userRole: 1,
      request: {
        ...mockData.request,
        type: 1,
        email: 'blaze@gmail.com'
      }
    };

    const wrapper = shallow(<RequestDetails {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
