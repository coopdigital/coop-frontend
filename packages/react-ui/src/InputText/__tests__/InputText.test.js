/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import InputText from "../src/index";

afterEach(cleanup);

describe("InputText", () => {
  it("should render correctly", () => {
    const { getByLabelText, container } = render(
      <InputText id="test" name="test" label="default label" />
    );
    expect(getByLabelText("default label")).toBeInTheDocument();
  });

  it("should support all variants", () => {
    // const variantMap = new Map([ ['withLabel', {}], ['withHint', {}], ['withLabelAndHint', {}]  ])
    const Variants = () => (
      <div>
        <InputText
          data-testid="withLabel"
          id="withLabel"
          name="withLabel"
          label="Input with label"
        />
        <InputText
          data-testid="withHint"
          id="withHint"
          name="withHint"
          hint="Input with hint"
        />
        <InputText
          data-testid="withLabelAndHint"
          id="withLabelAndHint"
          name="withLabelAndHint"
          label="Input with label and hint"
          hint="Input with label and hint"
        />
      </div>
    );

    const { container, getByTestId, getByLabelText } = render(<Variants />);

    expect(container.getElementsByTagName("input").length).toBe(3);

    expect(getByTestId("withHint")).toHaveAccessibleDescription(
      "Input with hint"
    );
    expect(getByTestId("withLabelAndHint")).toHaveAccessibleDescription(
      "Input with label and hint"
    );
  });

  it("should support all variants with error", () => {
    const VariantsWithError = () => (
      <div>
        <InputText
          id="withLabelAndError"
          data-testid="withLabelAndError"
          name="withLabelAndError"
          label="Input with label"
          errorMsg="Error message"
          hasError
        />
        <InputText
          id="withHintAndError"
          data-testid="withHintAndError"
          name="withHintAndError"
          hint="Input with hint"
          errorMsg="Error message"
          hasError
        />
        <InputText
          id="withLabelHintAndError"
          data-testid="withLabelHintAndError"
          name="withLabelHintAndError"
          label="Input with label and hint"
          hint="Input with label and hint"
          errorMsg="Error message"
          hasError
        />
      </div>
    );

    const { container } = render(<VariantsWithError />);
    const errorMessages = container.getElementsByClassName("coop-form__error");

    const errorInputs = container.getElementsByClassName("coop-form__invalid");
    expect(errorInputs.length).toBe(3);

    expect(errorMessages.length).toBe(3);
    for (let i = 0; i < errorMessages.length; i++) {
      expect(errorMessages[i]).toHaveTextContent("Error message");
    }
  });

  it("should allow percentage set widths based on the parent container width", () => {
    const width = 20;
    const { getByLabelText, container } = render(
      <InputText id="test" name="test" label="with set width" width={width} />
    );

    expect(getByLabelText("with set width")).toHaveClass(
      `coop-form__input--width-${width}`
    );
  });

  it("should be hidden when the prop `type` is hidden", () => {
    const { container, getByPlaceholderText } = render(
      <InputText
        placeholder="input placeholder hidden"
        type="hidden"
        id="test"
        name="test"
        label="is hidden"
      />
    );

    expect(getByPlaceholderText("input placeholder hidden")).not.toBeVisible();
  });
});
