import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputCheckbox from "../src/index";

describe("InputCheckbox", () => {
  it("should render correctly", () => {
    const { getByLabelText } = render(
      <InputCheckbox id="test" name="test" label="test" value={1} />
    );
    expect(getByLabelText("test")).toBeInTheDocument();
  });
});
