import React from 'react';
import { shallow } from 'enzyme';
import TextField from '../../../components/common/TextField';


const props = {
  field: '',
  value: '',
  label: '',
  error: [],
  type: '',
  placeholder: '',
  onChange: jest.fn(),
};


describe(' Textfield Component', () => {
  it('should render the Textfield component', () => {
    const wrapper = shallow(<TextField {...props} />);
    expect(wrapper.exists()).toBe(true);
  });
});
