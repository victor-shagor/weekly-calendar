import { useState } from "react";
import {
  add,
  eachDayOfInterval,
  format,
  getMonth,
  getYear,
  parse,
  parseISO,
  endOfWeek,
  startOfWeek,
} from "date-fns";
import DaysView from "./DaysView";
import Header from "./HeaderView";
import { months } from "../../constants";

function Calendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(
    format(parseISO(today.toISOString()), "MM/dd/yyyy")
  );
  const [selectedDay, setSelectedDay] = useState(today);

  const firstDayOfTheWeek = parse(currentDate, "MM/dd/yyyy", new Date());

  const daysArray = eachDayOfInterval({
    start: startOfWeek(firstDayOfTheWeek),
    end: endOfWeek(firstDayOfTheWeek),
  });

  //set currentWeek state, depending on what is clicked
  //function triggers on both previous and next click
  const onClickMonthToggle = (direction: string) => {
    const daysDuration = direction === "prev" ? { days: -7 } : { days: 7 };
    const firstDayOfMonth = add(firstDayOfTheWeek, daysDuration);
    setCurrentDate(
      format(parseISO(firstDayOfMonth.toISOString()), "MM/dd/yyyy")
    );

    //return selected day back to present day
    setSelectedDay(today);
  };

  const handleDayClick = (day: Date) => {
    setSelectedDay(day);
  };

  return (
    <div data-testid="calender" className="wrapper">
      <div className="calendar-container">
        <Header
          currentMonth={`${months[getMonth(new Date(currentDate))]}-${getYear(
            new Date(currentDate)
          )}`}
          handleIconClick={onClickMonthToggle}
        />
        <DaysView
          daysArray={daysArray}
          selectedDay={selectedDay}
          handleClick={handleDayClick}
        />
      </div>
    </div>
  );
}

export default Calendar;
