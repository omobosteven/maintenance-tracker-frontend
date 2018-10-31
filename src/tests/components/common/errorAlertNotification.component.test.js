import React from 'react';
import { shallow } from 'enzyme';
import ErrorAlertNotification from '../../../components/common/ErrorAlertNotification';


describe('ErrorAlertNotification Component', () => {
  const props = {
    errors: 'error',
    onClick: jest.fn()
  };

  it('should render the ErrorAlertNotification component', () => {
    const wrapper = shallow(<ErrorAlertNotification {...props} />);

    const button = wrapper.find('button');
    button.simulate('click');

    expect(wrapper.exists()).toBe(true);
  });
});
