import React from 'react';
import { shallow } from 'enzyme';
import Loading from '../../../components/common/Loading';


describe('Loading Component', () => {
  it('should render the Textfield component', () => {
    const wrapper = shallow(<Loading />);

    expect(wrapper.exists()).toBe(true);
  });
});
