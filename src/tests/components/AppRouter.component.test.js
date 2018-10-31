import React from 'react';
import { shallow } from 'enzyme';
import AppRoutes from '../../routers/AppRoutes';

describe('', () => {
  const wrapper = shallow(<AppRoutes />);

  it('renders the AppRoutes component', () => {
    expect(wrapper.exists()).toBe(true);
  });
});
