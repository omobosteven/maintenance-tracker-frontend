import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../views/LandingPage';

let wrapper;

describe('LandingPage component', () => {
  beforeEach(() => {
    const props = {
      auth: false
    };

    wrapper = shallow(<LandingPage {...props} />);
  });

  test('should render a snapshot of the LandingPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should redirect user if logged in', () => {
    const props = {
      auth: true
    };

    wrapper = shallow(<LandingPage {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
