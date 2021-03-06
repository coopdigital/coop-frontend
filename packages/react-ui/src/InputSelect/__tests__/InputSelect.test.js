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
    const { getByText } = render(
      <InputSelect
        id="id"
        name="name"
        label="With Label and Hint"
        hint="Hint message"
        width="33"
        hasError
        errorMsg="Error Message"
        options={options}
      />
    );

    expect(getByText("Hint message")).toBeInTheDocument();
    expect(getByText("Error Message")).toBeInTheDocument();
  });

  it("should select options correctly", () => {
    const { getByRole, getByLabelText } = render(
      <InputSelect
        id="id"
        name="name"
        label="With Label and Hint"
        options={options}
      />
    );
    userEvent.selectOptions(getByLabelText("With Label and Hint"), "2");
    expect(getByRole("option", { name: "option one" }).selected).toBe(false);
    expect(getByRole("option", { name: "option two" }).selected).toBe(true);

    userEvent.selectOptions(getByLabelText("With Label and Hint"), "1");
    expect(getByRole("option", { name: "option one" }).selected).toBe(true);
    expect(getByRole("option", { name: "option two" }).selected).toBe(false);
  });

  it("should render option placeholders correctly", () => {
    const { getByText } = render(
      <InputSelect
        id="id"
        name="name"
        label="With Label and Hint"
        placeholder="Choose an option"
        options={options}
      />
    );

    expect(getByText("Choose an option")).toBeInTheDocument();
    expect(getByText("Choose an option")).toBeDisabled();
    expect(getByText("Choose an option")).not.toBeVisible();
  });
});
