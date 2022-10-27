import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import Calendar from ".";

describe("days view", () => {
  it("should render Calendar view", () => {
    render(<Calendar />);
    const CalendarDiv = screen.getByTestId("calender");

    expect(CalendarDiv.querySelector(".btn")).toBeInTheDocument();
    expect(CalendarDiv.querySelectorAll(".btn").length).toEqual(2);
    expect(CalendarDiv.querySelector(".btn-date")).toBeInTheDocument();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
