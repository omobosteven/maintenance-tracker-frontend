import React from 'react';
import { shallow } from 'enzyme';
import { UserNavigation } from '../../../components/navigation/UserNavigation';


describe('UserNavigation Component', () => {
  it('should render the UserNavigation component for users', () => {
    const props = {
      logoutUser: jest.fn(),
      userRole: 2
    };

    const wrapper = shallow(<UserNavigation {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the UserNavigation component for admin', () => {
    const props = {
      logoutUser: jest.fn(),
      userRole: 1
    };

    const wrapper = shallow(<UserNavigation {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should logout user', () => {
    const props = {
      logoutUser: jest.fn(),
      userRole: 1
    };

    const wrapper = shallow(<UserNavigation {...props} />);

    const logout = wrapper.find('#logout');
    logout.simulate('click');

    expect(props.logoutUser).toHaveBeenCalled();
    expect(wrapper.exists()).toBe(true);
  });
});
