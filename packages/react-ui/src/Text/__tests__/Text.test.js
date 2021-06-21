/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Text from "../src/index";

afterEach(cleanup);

describe("Text", () => {
  it("should render P element in the default", () => {
    const { container, getByText } = render(<Text>test-value</Text>);
    expect(container.getElementsByTagName("p").length).toBe(1);
  });

  it("should work with all variants", () => {
    const variantMap = new Map([
      ["mega", { class: "coop-t-h-mega", text: "Mega" }],
      ["lead", { class: "coop-t-lead-p", text: "Lead" }],
      ["regular", { class: "coop-t-regular", text: "Regular" }],
      ["medium", { class: "coop-t-medium", text: "Medium" }],
      ["bold", { class: "coop-t-bold", text: "Bold" }],
    ]);
    const Variants = () => (
      <div>
        <Text variant="mega">Mega</Text>
        <Text variant="lead">Lead</Text>
        <Text variant="regular">Regular</Text>
        <Text variant="medium">Medium</Text>
        <Text variant="bold">Bold</Text>
      </div>
    );

    const { container, getByText } = render(<Variants />);

    variantMap.forEach((el) => {
      expect(container.getElementsByClassName(el.class).length).toBe(1);
      expect(getByText(el.text)).toBeInTheDocument();
    });
  });

  it("the specified element should be rendered", () => {
    const elements = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
    const Elements = () => (
      <div>
        {elements.map((el, index) => {
          const key = `${el}-${index}`;
          return (
            <Text key={key} type={el}>
              test-value
            </Text>
          );
        })}
      </div>
    );
    const { container } = render(<Elements />);

    elements.forEach((el) => {
      expect(container.getElementsByTagName(el).length).toBe(1);
    });
  });
});
