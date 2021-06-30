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
        <List type="numbered" items={items} />
      </div>
    );

    const { getByText, getByTestId } = render(<Variants />);

    expect(getByTestId("list-ul-test")).toBeInTheDocument();
    expect(getByTestId("list-ol-test")).toBeInTheDocument();

    const ulListItems = getByTestId("list-ul-test").childNodes;
    const olListItems = getByTestId("list-ol-test").childNodes;

    expect(ulListItems.length).toEqual(items.length);
    expect(olListItems.length).toEqual(items.length);
  });
});
