import React from 'react';
import { shallow } from 'enzyme';
import { SignupForm } from '../../../components/auth/SignupForm';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('SignupForm', () => {
  beforeEach(() => {
    const props = {
      action: {
        signupUser: jest.fn(),
        deleteError: jest.fn()
      },
      error: {},
      auth: false,
    };
    wrapper = shallow(<SignupForm {...props} />);
  });

  it('renders the SignupForm component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set username when username changes', () => {
    const event = {
      target: {
        name: 'username',
        value: 'blaze'
      }
    };

    const username = wrapper.find('.username');

    username.simulate('change', event);

    const expectedUsername = 'blaze';

    expect(wrapper.instance().state.username).toBe(expectedUsername);
  });

  it('should set password when password changes', () => {
    const event = {
      preventDefault: jest.fn(),
      target: {
        name: 'password',
        value: 'password'
      }
    };

    const password = wrapper.find('.password');

    password.simulate('change', event);

    wrapper.setState({ errors: { [event.target.name]: ['mock'] } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.name])
      .toBe(event.target.value);
  });

  it('should Signup user when correct creadentials are supplied', () => {
    const { signUpData } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };

    const Signup = wrapper.find('.submit');

    wrapper.setState(signUpData);
    Signup.simulate('click', event);

    expect(wrapper.instance().state.username).toBe(signUpData.username);
  });

  it('should return error for invalid form submission', () => {
    wrapper.find('.submit').simulate('click', {
      preventDefault: jest.fn(),
    });
    expect(wrapper.state('error')).not.toBe({});
    expect(wrapper).toMatchSnapshot();
  });

  it('should redirect user if user is already logged in', () => {
    const props = {
      action: {
        signupUser: jest.fn(),
        deleteError: jest.fn()
      },
      error: {},
      auth: true,
    };
    wrapper = shallow(<SignupForm {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should delete error message if there is an error', () => {
    const props = {
      action: {
        signupUser: jest.fn(),
        deleteError: jest.fn()
      },
      error: {
        message: 'There is an error'
      },
      auth: false,
    };
    wrapper = shallow(<SignupForm {...props} />);

    const deleteErrorMessage = wrapper.find('#errorNotify');
    deleteErrorMessage.simulate('click');

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().state.password).toBe('');
  });
});
