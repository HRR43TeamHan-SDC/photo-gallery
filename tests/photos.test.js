/* eslint-disable */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/App.jsx';
import Photos from '../client/Photos.jsx';

describe('App', () => {
  const wrapper = shallow(<App />);

  it('App renders Photos', () => {
    expect(wrapper.find(Photos).length).toEqual(1);
  });
});
