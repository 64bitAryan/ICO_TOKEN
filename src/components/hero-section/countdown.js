import React, { useState, useEffect } from "react";

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear timeout when component unmounts
    return () => clearTimeout(timer);
  });

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className="flex flex-row gap-5 justify-center">
      <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
        <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
          {timeLeft.days}d
        </p>
      </div>

      <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
        <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
          {formatTime(timeLeft.hours)}h
        </p>
      </div>

      <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
        <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
          {formatTime(timeLeft.minutes)}m
        </p>
      </div>

      <div className="rounded-lg md:rounded-3xl w-[90%] mx-auto border-white border px-10 py-2 border-opacity-20">
        <p className="text-center  md:leading-[58px] text-white md:text-[1.3rem] monument-regular">
          {formatTime(timeLeft.seconds)}s
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;
