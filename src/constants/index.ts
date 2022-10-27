const daysOfTheWeek = ["S", "M", "T", "W", "T", "F", "S"];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  

export interface DaysViewProps{
    daysArray: Date[];
    selectedDay: Date;
    handleClick: (day: Date) => void
}


export {daysOfTheWeek, months}