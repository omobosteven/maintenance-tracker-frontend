import React from 'react';
import { shallow } from 'enzyme';
import RequestList from '../../../components/requests/RequestList';

describe('RequestList', () => {
  const setProps = {
    id: 2,
    refNo: 456,
    item: 'laptop',
    status: 0,
    type: 1
  };

  it('should render the RequestList component', () => {
    const props = { ...setProps };

    const wrapper = shallow(<RequestList {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for pending request', () => {
    const props = { ...setProps, status: 1, type: 2 };

    const wrapper = shallow(<RequestList {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for approved request', () => {
    const props = { ...setProps, status: 2 };

    const wrapper = shallow(<RequestList {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for disapproved request', () => {
    const props = { ...setProps, status: 3 };

    const wrapper = shallow(<RequestList {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for resolved request', () => {
    const props = { ...setProps, status: 4 };

    const wrapper = shallow(<RequestList {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});
