import React, { useState } from "react";

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const monthsOfYear = [
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

const PadCell = () => <div className="bg-blue-50 border-2 border-white" />;

const DayCell = ({ children, className }) => (
  <div
    className={
      `
    flex justify-center items-center aspect-square
    border-2 border-black bg-gray-50 p-5
    text-xl cursor-pointer select-none
    transition-all duration-75
    hover:scale-110 hover:bg-white hover:shadow-xl
    ` + className
    }
  >
    {children}
  </div>
);

const Grid = ({ inputDate = new Date() }) => {
  const daysInMonth = [];
  const today = new Date();

  const startDate = new Date(inputDate.getFullYear(), inputDate.getMonth());
  const endDate = new Date(inputDate.getFullYear(), inputDate.getMonth() + 1);

  const startingDayOfWeek = daysOfWeek[startDate.getDay()];
  const leadingDaysOfWeek = daysOfWeek.indexOf(startingDayOfWeek);

  for (let i = 0; i < leadingDaysOfWeek; i++) {
    daysInMonth.push(<PadCell key={`pad-${i}`} />);
  }

  while (startDate < endDate) {
    const day = startDate.getDate();
    const key = `day-${day}`;

    if (
      startDate.getDate() === today.getDate() &&
      startDate.getMonth() === today.getMonth() &&
      startDate.getFullYear() === today.getFullYear()
    ) {
      daysInMonth.push(
        <DayCell key={key} className="!bg-blue-400 text-outline text-white">
          {day}
        </DayCell>
      );
    } else {
      daysInMonth.push(<DayCell key={key}>{day}</DayCell>);
    }

    startDate.setDate(startDate.getDate() + 1);
  }

  while (daysInMonth.length < 35) {
    daysInMonth.push(<PadCell key={`pad-${daysInMonth.length}`} />);
  }

  return daysInMonth;
};

const ScheduleManagement = () => {
  const [displayDate, setDisplayDate] = useState(new Date());

  return (
    <>
      <div className="bg-blue-400 text-white text-outline border-2 border-black flex justify-around my-2 py-2.5 select-none">
        <div
          className="text-xl cursor-pointer hover:scale-105"
          onClick={() =>
            setDisplayDate(
              new Date(displayDate.getFullYear(), displayDate.getMonth() - 1)
            )
          }
        >
          Prev
        </div>
        <div
          className="text-xl cursor-pointer hover:scale-105"
          onClick={() =>
            setDisplayDate(
              new Date(displayDate.getFullYear(), displayDate.getMonth() + 1)
            )
          }
        >
          Next
        </div>
        <div
          className="text-xl cursor-pointer hover:scale-105"
          onClick={() => setDisplayDate(new Date())}
        >
          Today
        </div>
      </div>

      <div className="border-2 border-black relative bg-blue-100 p-10 select-none">
        <div className="text-outline text-5xl text-right text-white mb-10">
          {monthsOfYear[displayDate.getMonth()]} {displayDate.getFullYear()}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {daysOfWeek.map((i) => (
            <div key={i}>{i.slice(0, 3)}</div>
          ))}
          <Grid inputDate={displayDate} />
        </div>
      </div>
    </>
  );
};

export default ScheduleManagement;
