import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../views/NotFoundPage';


describe('NotFoundPage Component', () => {
  it('should render the NotFoundPage component', () => {
    const wrapper = shallow(<NotFoundPage />);

    expect(wrapper.exists()).toBe(true);
  });
});
