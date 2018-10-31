import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

describe('Header component', () => {
  it('should render the Header component', () => {
    const props = {
      auth: {
        isAuthenticated: false
      }
    };

    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the UserNavigation component', () => {
    const props = {
      auth: {
        isAuthenticated: true,
        user: {
          username: 'blaze'
        }
      },
    };

    const wrapper = shallow(<Header {...props} />);

    const toggleNavbar = wrapper.find('.nav-toggle');
    toggleNavbar.simulate('click');

    expect(wrapper.exists()).toBe(true);
  });
});
