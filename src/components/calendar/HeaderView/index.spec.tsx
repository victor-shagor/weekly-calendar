import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Header from ".";

describe("Header view", () => {
  it("should render calendar header view", () => {
    render(<Header />);
    const btnDiv = screen.getByTestId("header");

    expect(btnDiv.querySelector(".btn")).toBeInTheDocument();
    expect(btnDiv.querySelectorAll(".btn").length).toEqual(2);
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
