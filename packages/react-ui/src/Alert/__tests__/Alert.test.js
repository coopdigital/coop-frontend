/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Alert from "../src/index";

afterEach(cleanup);

describe("Alert", () => {
  it("should render default Alert", () => {
    const { getByText } = render(<Alert heading="Alert heading" />);
    expect(getByText("Alert heading")).toBeInTheDocument;
  });

  it("should work with all variants", () => {
    const link = { href: "#", text: "Example message" };

    const variantMap = new Map([
      [
        "alert-warn",
        {
          class: "coop-c-notification--alert",
          heading: "Warning Alert",
          role: "alert",
        },
      ],
      [
        "alert-error",
        {
          class: "coop-c-notification--error",
          heading: "Error Alert",
          role: "alert",
        },
      ],
      [
        "alert-success",
        {
          class: "coop-c-notification--success",
          heading: "Success Notification Alert",
          role: "status",
        },
      ],
    ]);

    const Variants = () => (
      <div>
        <Alert
          testId="alert-warn"
          type="warn"
          heading="Warning Alert"
          link={link}
        />
        <Alert
          testId="alert-error"
          type="error"
          heading="Error Alert"
          link={link}
        />
        <Alert
          testId="alert-success"
          type="success"
          heading="Success Notification Alert"
          link={link}
        />
        <Alert testId="alert-default" heading="Alert with no link">
          Standard message
        </Alert>
      </div>
    );

    const { getByText, getByTestId } = render(<Variants />);

    variantMap.forEach((value, key) => {
      expect(getByTestId(key)).toHaveClass(value.class);
      expect(getByTestId(key)).toHaveAttribute("role", value.role);
      expect(getByText(value.heading)).toBeInTheDocument();
    });
  });
});
