import React from "react";
import { render, cleanup } from '@testing-library/react';
import Alert from "../src/index";

afterEach(cleanup);

describe("Alert", () => {
  it("should render default Alert", () => {
    const wrapper = render(<Alert heading="Alert heading" />);
    expect(() => wrapper.unmount()).not.toThrow();

    const { asFragment } = render();
    console.log('asFragment:: ', asFragment());
    expect(asFragment(<Alert heading="Info Alert notification" />)).toMatchSnapshot();

  });

  it("should work with all variants", () => {
    const link = { href: "#", text: "Example message" };
    const Variants = () => (
      <div>
        <Alert type="info" heading="Info Alert" link={link} />
        <Alert type="warn" heading="Warning Alert" link={link} />
        <Alert type="error" heading="Warning Alert" link={link} />
        <Alert heading="Alert with no link">Standard message</Alert>
      </div>
    );

    const wrapper = render(<Variants />);
    expect(() => wrapper.unmount()).not.toThrow();

    const { asFragment } = render(<Variants />);
    const variantBlock = asFragment();
    expect(variantBlock).toMatchSnapshot();
  });
});
