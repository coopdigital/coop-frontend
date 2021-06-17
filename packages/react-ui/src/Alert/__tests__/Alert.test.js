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
    ]);

    const Variants = () => (
      <div>
        <Alert type="info" heading="Info Alert" link={link} />
        <Alert
          data-testid="alert-warn"
          type="warn"
          heading="Warning Alert"
          link={link}
        />
        <Alert
          data-testid="alert-error"
          type="error"
          heading="Error Alert"
          link={link}
        />
        <Alert data-testid="alert-default" heading="Alert with no link">
          Standard message
        </Alert>
      </div>
    );
    /**
     * Default and alert type info are the same variant...
     * when passing no type prop the alert deafults to the info alert type.
     * Is it needed?
     */

    const { getByText, getByTestId } = render(<Variants />);

    variantMap.forEach((value, key) => {
      expect(getByTestId(key)).toHaveClass(value.class);

      //magic string for attribute??
      expect(getByTestId(key)).toHaveAttribute("role", value.role);
      expect(getByText(value.heading)).toBeInTheDocument();
    });
  });
});
