/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Component from '../src/index.mjs';

afterEach(cleanup);

describe('Component', () => {
  it('should render default Component', () => {
    const wrapper = render(<Component heading="heading" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const { asFragment } = render(<Component heading="heading" />);
    expect(asFragment(<Component heading="heading" />)).toMatchSnapshot();
  });
});
