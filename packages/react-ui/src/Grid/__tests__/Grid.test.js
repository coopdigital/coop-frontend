import React from "react";
// import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Grid from "../src/index";

afterEach(cleanup);

describe("Grid", () => {
  it("should render correctly", () => {
    const { container } = render(<Grid />);

    expect(container.firstChild).toHaveClass("coop-l-grid");
  });

  it("should allow center and reverse attributes", () => {
    const Attributes = () => (
      <>
        <Grid data-testid="grid-test" center />
        <Grid data-testid="grid-test" reverse />
        <Grid data-testid="grid-test" center reverse />
      </>
    );

    const { getAllByTestId } = render(<Attributes />);
    const gridArray = getAllByTestId("grid-test");

    expect(gridArray[0]).toHaveClass("coop-u-flex-center");
    expect(gridArray[1]).toHaveClass("coop-u-flex-row-reverse");
    expect(gridArray[2]).toHaveClass("coop-u-flex-center");
    expect(gridArray[2]).toHaveClass("coop-u-flex-row-reverse");
    for (let i = 0; i < gridArray.length; i++) {
      expect(gridArray[i]).toHaveClass("coop-l-grid");
    }
  });

  it("should render with children", () => {
    const testString = "test grid children";
    const { getByText } = render(<Grid children={testString} />);
    expect(getByText(testString)).toBeInTheDocument();
  });
});
