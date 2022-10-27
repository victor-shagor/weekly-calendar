import { format, isEqual, isToday } from "date-fns";
import classNames from "classnames";
import { daysOfTheWeek, DaysViewProps } from "../../../constants";

function DaysView({ daysArray, selectedDay, handleClick }: DaysViewProps) {
  return (
    <div data-testid="daysview-container">
      <div
        style={{
          display: "flex",
          margin: "1rem",
          justifyContent: "space-between",
        }}
      >
        {daysOfTheWeek.map((day, idx) => (
          <div>{day}</div>
        ))}
      </div>
      <div
        data-testid="day-grid"
        style={{
          display: "flex",
          margin: "0.3rem",
          justifyContent: "space-between",
        }}
      >
        {daysArray.map((day: any) => (
          <div key={day.toString()}>
            <button
              type="button"
              onClick={() => handleClick(day)}
              className={classNames(
                isEqual(day, selectedDay) && "white",
                !isEqual(day, selectedDay) && isToday(day) && "blue",
                isEqual(day, selectedDay) && !isToday(day) && "bg-dark",
                isEqual(day, selectedDay) && isToday(day) && "bg-blue",
                "btn-date"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaysView;
