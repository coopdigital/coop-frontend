import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FormContainer from "../src/index";

afterEach(cleanup);

describe("FormContainer", () => {
  it("should render default FormContainer", () => {
    const { getByTestId } = render(
      <FormContainer data-testid="test-form-container-1" />
    );
    expect(getByTestId("test-form-container-1")).toBeInTheDocument();
  });

  it("should work with props", () => {
    const onClickMock = jest.fn();
    const onSubmitMock = jest.fn();
    const WithProps = () => (
      <FormContainer
        id="test"
        data-testid="test-form-container-2"
        className="newClass"
        onClick={() => onClickMock}
        onSubmit={() => onSubmitMock}
      >
        Form Body
      </FormContainer>
    );

    const { getByTestId, getByText } = render(<WithProps />);
    expect(getByTestId("test-form-container-2")).toHaveClass("newClass");
    expect(getByText("Form Body")).toBeInTheDocument();
    // const tree = renderer.create(<WithProps />).toJSON();
    // expect(tree).toMatchSnapshot();
  });
});
