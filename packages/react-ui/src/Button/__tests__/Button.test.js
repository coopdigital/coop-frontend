/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from "../src/index";

afterEach(cleanup);

describe("Button", () => {
  it("should render correctly", () => {
    const {getByText} = render(<Button>Button rendered</Button>);
    expect(getByText('Button rendered')).toBeInTheDocument();
  });

  it("should support all variants", () => {
    const expectedButtonText = ['Default', 'Primary', 'White', 'Grey'];
    const Variants = () => (
      <div>
        <Button>Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="white">White</Button>
        <Button variant="grey">Grey</Button>
      </div>
    );
    const { getByText, asFragment } = render(<Variants />);

    expectedButtonText.forEach( expectedText => {
      expect(getByText(expectedText)).toBeInTheDocument();
    });

    const buttonVariantBlock = asFragment();
    expect(buttonVariantBlock).toMatchSnapshot();
  });

  it("should support all sizes", () => {
    const expectedButtonText = ['Small', 'Default/Medium'];

    const Sizes = () => (
      <div>
        <Button size="small">Small</Button>
        <Button size="medium">Default/Medium</Button>
      </div>
    );

    const {getByText, asFragment } = render(<Sizes />);

    expectedButtonText.forEach( expectedText => {
      expect(getByText(expectedText)).toBeInTheDocument();
    });

    const buttonSizesBlock = asFragment()
    expect(buttonSizesBlock).toMatchSnapshot();
  });

  it("should render different text", () => {
    const { rerender, getByText } = render(<Button>button</Button>);
    expect(getByText('button')).toBeInTheDocument();


    rerender(<Button>New text</Button>);
    expect(getByText('New text')).toBeInTheDocument();
  });

  it('should support full width buttons', () => {
    const {container, asFragment} = render(<Button fullWidth>Full width button</Button>);
    const fullwidthButton = asFragment();

    expect(container.firstChild).toHaveClass('coop-btn--full-width')
    expect(fullwidthButton).toMatchSnapshot();
  });

  it('should support loading state button prop', () => {
    const {container, asFragment} = render(<Button isLoading>Button is loading</Button>);
    const loadingButton = asFragment();

    expect(container.firstChild).toHaveClass('coop-btn--loading');
    expect(loadingButton).toMatchSnapshot();
  })


  it("should render empty button correctly", () => {
    const {container, asFragment} = render(<Button />);
    const emptyButtonBlock = asFragment();

    expect(emptyButtonBlock).toMatchSnapshot();
  });
});
