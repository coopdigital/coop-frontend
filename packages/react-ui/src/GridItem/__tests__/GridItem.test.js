import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import GridItem from "../src/index";

describe("GridItem", () => {
  it("should render correctly", () => {
    const { container } = render(<GridItem />);
    expect(container.firstChild).toHaveClass("coop-l-grid__item");
  });

  it("should allow size and offset attributes", () => {
    const SizesAndOffsets = () => (
      <>
        <GridItem
          size={6}
          offset={4}
          sm={5}
          smOffset={3}
          md={4}
          mdOffset={2}
          lg={3}
          lgOffset={1}
          xlg={2}
          xlgOffset={1}
        />
      </>
    );
    const { getByTestId } = render(<SizesAndOffsets />);
    const gridItemTest = getByTestId("grid-item-test");

    expect(gridItemTest).toHaveClass("coop-l-grid__item--6");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--offset-4");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--small-5");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--small-offset-3");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--medium-4");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--medium-offset-2");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--large-3");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--large-offset-1");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--xlarge-2");
    expect(gridItemTest).toHaveClass("coop-l-grid__item--xlarge-offset-1");
  });

  it("should allow collapse attribute", () => {
    const Collapse = () => (
      <>
        <GridItem collapse />
      </>
    );
    const { container } = render(<Collapse />);
    expect(container.firstChild).toHaveClass("coop-l-grid__item--collapse");
  });

  it("should allow children", () => {
    const testChildString = "grid item test child string";
    const { getByText } = render(<GridItem children={testChildString} />);
    expect(getByText(testChildString)).toBeInTheDocument();
  });
});
