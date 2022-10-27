import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
import DaysView from ".";

const mockDaysArray = [
  new Date(),
  new Date("2022-10-01T23:00:00.000Z"),
  new Date("2022-10-02T23:00:00.000Z"),
];

const handleClick = jest.fn();
describe("days view", () => {
  it("should render days view", () => {
    render(
      <DaysView
        handleClick={handleClick}
        selectedDay={mockDaysArray[2]}
        daysArray={mockDaysArray}
      />
    );

    const btnDiv = screen.getByTestId("day-grid");

    expect(handleClick).toHaveBeenCalledTimes(0);
    expect(btnDiv.querySelector(".btn-date")).toBeInTheDocument();
    expect(btnDiv.querySelector(".bg-dark")).toBeInTheDocument();
  });

  it("should call handleClick function", () => {
    render(
      <DaysView
        handleClick={handleClick}
        selectedDay={mockDaysArray[0]}
        daysArray={mockDaysArray}
      />
    );
    const btnClick = screen
      .getByTestId("day-grid")
      .querySelectorAll(".btn-date")[0];
    fireEvent.click(btnClick);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <DaysView
          handleClick={handleClick}
          selectedDay={mockDaysArray[0]}
          daysArray={mockDaysArray}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
