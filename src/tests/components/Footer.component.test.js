import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/Footer';

describe('', () => {
  const wrapper = shallow(<Footer />);

  it('renders the AppRoutes component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
