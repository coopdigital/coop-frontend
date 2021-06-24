import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputRadioGroup from "../src/index.mjs";
import InputRadio from "../../InputRadio/src";

describe("InputRadioGroup", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <InputRadioGroup
        id="group-1"
        legend="Radio Group with hint"
        hint="Hint message"
      />
    );

    expect(getByText("Radio Group with hint")).toBeInTheDocument();
    expect(getByText("Hint message")).toBeInTheDocument();
  });

  it("should support error props", () => {
    const All = () => (
      <div>
        <InputRadioGroup
          id="group-2"
          legend="Radio Group with hint and error"
          hint="Hint message"
          errorMsg="Error message"
          hasError
        >
          <InputRadio
            id="radio-4"
            name="radio-test"
            label="Radio 4"
            value={4}
          />
          <InputRadio
            id="radio-5"
            name="radio-test"
            label="Radio 5"
            value={5}
          />
          <InputRadio
            id="radio-6"
            name="radio-test"
            label="Radio 6"
            value={6}
          />
        </InputRadioGroup>
      </div>
    );

    const { getByText } = render(<All />);
    expect(getByText("Error message")).toBeInTheDocument();
  });

  it("should only allow 1 selected radio in a group", () => {
    const All = () => (
      <div>
        <InputRadioGroup id="group-2" legend="Radio Group selection">
          <InputRadio
            id="radio-4"
            name="radio-test"
            label="Radio 4"
            value={4}
          />
          <InputRadio
            id="radio-5"
            name="radio-test"
            label="Radio 5"
            value={5}
          />
          <InputRadio
            id="radio-6"
            name="radio-test"
            label="Radio 6"
            value={6}
          />
        </InputRadioGroup>
      </div>
    );

    const { getAllByRole, container } = render(<All />);
    const radioInputArray = getAllByRole("radio");
    for (let i = 0; i < radioInputArray.length; i++) {
      radioInputArray[i].click();
      expect(radioInputArray[i]).toBeChecked();
      if (radioInputArray[i - 1]) {
        expect(radioInputArray[i - 1]).not.toBeChecked();
      }
    }
  });
});
