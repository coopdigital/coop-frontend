/**
 * @jest-environment jsdom
 */

import React from 'react';
// import { mount } from 'enzyme';
// import renderer from 'react-test-renderer';
import {render, screen, cleanup} from '@testing-library/react';
import Blockquote from '../src/index.mjs';

afterEach(cleanup);

describe('Blockquote', () => {
  it('should render default Blockquote', () => {
    const wrapper = render(<Blockquote citation="citation one" quote="this is a quote and is required"/>);
    expect(() => wrapper.unmount()).not.toThrow();
    const { asFragment } = render(<Blockquote citation="citation one" quote="this is a quote and is required"/>)
    expect(asFragment(<Blockquote citation="citation one" quote="this is a quote and is required"/>)).toMatchSnapshot();
  });

  it('should work with all variants', () => {
    const Variants = () => (
      <div>
        <Blockquote quoteLarge citation="cite" quote="this is a quote and is required"/>
      </div>
    );

    const wrapper = render(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();

    const { asFragment } = render(<Variants />);
    expect(asFragment(<Variants />)).toMatchSnapshot();
  });
});
