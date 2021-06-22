/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ComponentExample from "../src/index";

afterEach(cleanup);

describe("ComponentExample", () => {
  it("should render the component in the default", () => {
    const { container, getByText } = render(
      <ComponentExample
        heading="This is a test heading"
        content="Some text from the content prop"
      />
    );
    expect(container.getElementsByTagName("h3").length).toBe(1);
    expect(container.getElementsByTagName("p").length).toBe(1);
    expect(getByText("Some text from the content prop")).toBeInTheDocument();
  });
});
