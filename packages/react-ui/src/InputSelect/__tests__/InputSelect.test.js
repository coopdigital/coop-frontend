import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import InputSelect from "../src/index";

afterEach(cleanup);

describe("InputSelect", () => {
  const options = [
    {
      value: "1",
      text: "option one",
    },
    {
      value: "2",
      text: "option two",
    },
  ];

  it("should render correctly", () => {
    const { getByLabelText } = render(
      <InputSelect id="test" name="test" label="Test select" />
    );

    expect(getByLabelText("Test select")).toBeInTheDocument();
  });

  it("should render props correctly", () => {
    const { getByRole, getByLabelText, getByText } = render(
      <InputSelect
        id="id"
        name="name"
        label="With Label and Hint"
        hint="Hint message"
        hasError
        errorMsg="Error Message"
        options={options}
      />
    );

    expect(getByText("Hint message")).toBeInTheDocument();
    expect(getByText("Error Message")).toBeInTheDocument();

    userEvent.selectOptions(getByLabelText("With Label and Hint"), "2");
    expect(getByRole("option", { name: "option one" }).selected).toBe(false);
    expect(getByRole("option", { name: "option two" }).selected).toBe(true);
  });
});
