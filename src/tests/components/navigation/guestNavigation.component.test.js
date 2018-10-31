import React from 'react';
import { shallow } from 'enzyme';
import GuestNavigation from '../../../components/navigation/GuestNavigation';


describe('GuestNavigation Component', () => {
  it('should render the GuestNavigation component', () => {
    const wrapper = shallow(<GuestNavigation />);

    expect(wrapper.exists()).toBe(true);
  });
});
