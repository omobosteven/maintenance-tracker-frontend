import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm } from '../../../components/auth/LoginForm';
import mockData from '../../__mocks__/mockData';

let wrapper;

describe('LoginForm', () => {
  beforeEach(() => {
    const props = {
      action: {
        loginUser: jest.fn(),
        deleteError: jest.fn()
      },
      error: {},
      auth: false,
    };
    wrapper = shallow(<LoginForm {...props} />);
  });

  it('renders the LoginForm component', () => {
    expect(wrapper.exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });

  it('should set email when email changes', () => {
    const event = {
      target: {
        name: 'email',
        value: 'blaze@gmail.com'
      }
    };

    const email = wrapper.find('.email');

    email.simulate('change', event);

    const expectedEmail = 'blaze@gmail.com';

    expect(wrapper.instance().state.email).toBe(expectedEmail);
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

    wrapper.setState({ errors: { [event.target.name]: 'mock' } });
    wrapper.instance().onChange(event);
    expect(wrapper.instance().state[event.target.name])
      .toBe(event.target.value);
  });

  it('should login user when correct creadentials are supplied', () => {
    const { loginData } = mockData;
    const event = {
      preventDefault: jest.fn(),
    };

    const Login = wrapper.find('.submit');

    wrapper.setState(loginData);
    Login.simulate('click', event);
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
        loginUser: jest.fn(),
        deleteError: jest.fn()
      },
      error: {},
      auth: true,
    };
    wrapper = shallow(<LoginForm {...props} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should delete error message if there is an error', () => {
    const props = {
      action: {
        loginUser: jest.fn(),
        deleteError: jest.fn()
      },
      error: {
        message: 'There is an error'
      },
      auth: false,
    };
    wrapper = shallow(<LoginForm {...props} />);

    const deleteErrorMessage = wrapper.find('#errorNotify');
    deleteErrorMessage.simulate('click');

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.instance().state.password).toBe('');
  });
});
