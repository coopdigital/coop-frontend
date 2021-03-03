/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Component from '../src/index.mjs';

describe('Component', () => {
  it('should render default Component', () => {
    const wrapper = mount(<Component heading="heading" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Component heading="heading" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
