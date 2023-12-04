"use client";

import React from "react";
import { useCountdown } from "./hook";

export const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <span>Timer-ul a expirat!</span>;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <a rel="noopener noreferrer" className="countdown-link">
        <DateTimeDisplay value={days} type={"Zile"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Ore"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Min"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Secunde"} isDanger={false} />
      </a>
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <p>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
