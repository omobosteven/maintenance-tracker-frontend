import React from 'react';
import { shallow } from 'enzyme';
import { AdminRequestStatus } from '../../../../components/requests/common/AdminRequestStatus';

describe('AdminRequestStatus component', () => {
  const setProps = {
    action: {
      setRequestStatus: jest.fn().mockResolvedValue(Promise.resolve()),
      fetchRequest: jest.fn(),
    },
    requestId: '1',
    status: 1
  };

  it('should render the AdminRequestStatus component', () => {
    const props = { ...setProps };

    const wrapper = shallow(<AdminRequestStatus {...props} />);

    const approveRequest = wrapper.find('.btn-approve');
    approveRequest.simulate('click', 'approve');

    expect(wrapper.exists()).toBe(true);
  });

  it('should disapprove a requests', () => {
    const props = { ...setProps, status: 2 };

    const wrapper = shallow(<AdminRequestStatus {...props} />);

    const approveRequest = wrapper.find('.btn-reject');
    approveRequest.simulate('click', 'disapprove');

    expect(wrapper.exists()).toBe(true);
  });

  it('should resolve a requests', () => {
    const props = { ...setProps, status: 2 };

    const wrapper = shallow(<AdminRequestStatus {...props} />);

    const approveRequest = wrapper.find('.btn-resolve');
    approveRequest.simulate('click', 'resolve');

    expect(wrapper.exists()).toBe(true);
  });
});
