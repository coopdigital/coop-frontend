/**
 * @jest-environment jsdom
 */

import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Blockquote from '../src/index.mjs';

describe('Blockquote', () => {
  it('should render default Blockquote', () => {
    const wrapper = mount(<Blockquote />);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Blockquote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should work with all variants', () => {
    const Variants = () => (
      <div>
        <Blockquote quoteLarge citation="cite">
          Quote
        </Blockquote>
      </div>
    );

    const wrapper = mount(<Variants />);
    expect(wrapper.find('.coop-t-blockquote p').hasClass('coop-t-blockquote__quote--large')).toEqual(true);
    expect(() => wrapper.unmount()).not.toThrow();

    const tree = renderer.create(<Variants />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
