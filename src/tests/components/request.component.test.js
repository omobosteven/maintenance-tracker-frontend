import React from 'react';
import { shallow } from 'enzyme';
import { Requests } from '../../components/Requests';
import mockData from '../__mocks__/mockData';

describe('Request component', () => {
  const setProps = {
    userRole: 1,
    fetchRequests: jest.fn(),
    requests: mockData.requests
  };

  it('should render the Request component', () => {
    const props = { ...setProps };

    const wrapper = shallow(<Requests {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the Request component for user', () => {
    const props = { ...setProps, userRole: 2 };

    const wrapper = shallow(<Requests {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should not render the Request component', () => {
    const props = { ...setProps, requests: null };

    const wrapper = shallow(<Requests {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});
