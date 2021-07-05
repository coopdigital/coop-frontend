import React from "react";
// import { mount } from "enzyme";
// import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "../src/";

afterEach(cleanup);

describe("List", () => {
  it("should render default List", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("list-ul-test")).toBeInTheDocument();
  });

  it("should work with all variants", () => {
    const items = [
      {
        content: "one",
      },
      {
        content: 2,
      },
      {
        content: <div>three</div>,
      },
    ];

    const Variants = () => (
      <div>
        <List type="bullet" items={items} />
        <List type="bullet" bare items={items} />
        <List type="bullet" inline items={items} />
        <List type="numbered" items={items} />
        <List type="numbered" bare items={items} />
        <List type="numbered" inline items={items} />
      </div>
    );

    const { getByText, getByTestId, getAllByTestId } = render(<Variants />);

    const ulListVariants = getAllByTestId("list-ul-test");
    const olListVariants = getAllByTestId("list-ol-test");

    expect(ulListVariants[1]).toHaveClass("coop-u-list-bare");
    expect(ulListVariants[2]).toHaveClass("coop-u-list-inline");

    expect(olListVariants[1]).toHaveClass("coop-u-list-bare");
    expect(olListVariants[2]).toHaveClass("coop-u-list-inline");
  });
});
