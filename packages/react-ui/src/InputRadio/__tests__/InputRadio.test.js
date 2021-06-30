import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputRadio from "../src/index";

describe("InputRadio", () => {
  it("should render correctly", () => {
    const { getByLabelText } = render(
      <InputRadio id="test" name="test" label="test" value={1} />
    );
    expect(getByLabelText("test")).toBeInTheDocument();
  });

  it("should be checked on selecting", () => {
    const { getByLabelText } = render(
      <InputRadio id="test" name="test" label="test" value={1} />
    );

    const radioInput = getByLabelText("test");
    radioInput.click();

    expect(radioInput).toBeChecked();
  });
});
