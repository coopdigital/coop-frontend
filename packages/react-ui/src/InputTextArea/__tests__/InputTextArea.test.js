import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputTextArea from "../src/";

afterEach(cleanup);

describe("InputTextArea", () => {
  it("should render correctly", () => {
    const { getByLabelText } = render(
      <InputTextArea id="test" name="test" label="test" />
    );
    expect(getByLabelText("test")).toBeInTheDocument();
  });

  it("should support all variants", () => {
    const Variants = () => (
      <div>
        <InputTextArea id="label" name="label" label="Input with label" />
        <InputTextArea
          data-testid="withHint"
          id="withHint"
          name="withHint"
          hint="Input with hint"
        />
        <InputTextArea
          data-testid="withLabelAndHint"
          id="withLabelAndHint"
          name="withLabelAndHint"
          label="Input with label and hint"
          hint="Input with label and hint"
        />
      </div>
    );

    const { container, getAllLabelText, getByTestId } = render(<Variants />);
    expect(container.getElementsByTagName("textarea").length).toBe(3);

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
        <InputTextArea
          data-testid="withLabelAndError"
          id="withLabelAndError"
          name="withLabelAndError"
          label="Input with label"
          errorMsg="Error message"
          hasError
        />
        <InputTextArea
          data-testid="withHintAndError"
          id="withHintAndError"
          name="withHintAndError"
          hint="Input with hint"
          errorMsg="Error message"
          hasError
        />
        <InputTextArea
          data-testid="withLabelHintAndError"
          id="withLabelHintAndError"
          name="withLabelHintAndError"
          label="Input with label and hint"
          hint="Input with label and hint"
          errorMsg="Error message"
          hasError
        />
      </div>
    );

    const { container, getByTestId } = render(<VariantsWithError />);
    const errorMessages = container.getElementsByClassName("coop-form__error");

    const errorInputs = container.getElementsByClassName("coop-form__invalid");
    expect(errorInputs.length).toBe(3);

    expect(getByTestId("withLabelAndError")).toHaveAccessibleDescription(
      "Error message"
    );

    expect(getByTestId("withHintAndError")).toHaveAccessibleDescription(
      "Input with hint Error message"
    );

    expect(getByTestId("withLabelHintAndError")).toHaveAccessibleDescription(
      "Input with label and hint Error message"
    );

    expect(errorMessages.length).toBe(3);
    for (let i = 0; i < errorMessages.length; i++) {
      expect(errorMessages[i]).toHaveTextContent("Error message");
    }
  });
});
