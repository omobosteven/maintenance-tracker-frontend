import React from 'react';
import { shallow } from 'enzyme';
import UserRequestStatus from '../../../../components/requests/common/UserRequestStatus';

describe('UserRequestStatus component', () => {
  it('should render the RequestList component', () => {
    const props = { status: 0 };

    const wrapper = shallow(<UserRequestStatus {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for pending request', () => {
    const props = { status: 1 };

    const wrapper = shallow(<UserRequestStatus {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for approved request', () => {
    const props = { status: 2 };

    const wrapper = shallow(<UserRequestStatus {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for disapproved request', () => {
    const props = { status: 3 };

    const wrapper = shallow(<UserRequestStatus {...props} />);

    expect(wrapper.exists()).toBe(true);
  });

  it('should render the RequestList component for resolved request', () => {
    const props = { status: 4 };

    const wrapper = shallow(<UserRequestStatus {...props} />);

    expect(wrapper.exists()).toBe(true);
  });
});
