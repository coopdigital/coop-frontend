import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputCheckboxGroup from "../src";
import InputCheckbox from "../../InputCheckbox/src";

describe("InputCheckboxGroup", () => {
  it("should render correctly", () => {
    const { getByText } = render(
      <InputCheckboxGroup
        id="group-1"
        legend="Checkbox Group with hint"
        hint="Hint message"
      />
    );
    expect(getByText("Checkbox Group with hint")).toBeInTheDocument();
    expect(getByText("Hint message")).toBeInTheDocument();
  });

  xit("should support hints", () => {
    const All = () => (
      <div>
        <InputCheckboxGroup
          id="group-1"
          legend="Checkbox Group with hint"
          hint="Hint message"
        >
          <InputCheckbox
            id="checkbox-1"
            name="checkbox-test"
            label="Checkbox 1"
            value={1}
          />
          <InputCheckbox
            id="checkbox-2"
            name="checkbox-test"
            label="Checkbox 2"
            value={2}
          />
          <InputCheckbox
            id="checkbox-3"
            name="checkbox-test"
            label="Checkbox 3"
            value={3}
          />
        </InputCheckboxGroup>
      </div>
    );

    const { getByText } = render(<All />);
    expect(getByText("Hint message")).toBeInTheDocument();
  });

  xit("should support error props", () => {
    const All = () => (
      <div>
        <InputCheckboxGroup
          id="group-1"
          legend="Checkbox Group with hint"
          errorMsg="Error message"
          hasError
        >
          <InputCheckbox
            id="checkbox-1"
            name="checkbox-test"
            label="Checkbox 1"
            value={1}
          />
          <InputCheckbox
            id="checkbox-2"
            name="checkbox-test"
            label="Checkbox 2"
            value={2}
          />
          <InputCheckbox
            id="checkbox-3"
            name="checkbox-test"
            label="Checkbox 3"
            value={3}
          />
        </InputCheckboxGroup>
      </div>
    );

    const { getByText } = render(<All />);
    expect(getByText("Error message")).toBeInTheDocument();
  });
});
