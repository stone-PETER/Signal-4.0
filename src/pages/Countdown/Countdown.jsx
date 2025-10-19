import "./countdown.css";
import React, { useEffect } from "react";

export const Countdown = () => {
  useEffect(() => {
    function mobileview()
    {
        document.querySelector(".hour h3").textContent="Hr";
        document.querySelector(".minute h3").textContent="Min";
        document.querySelector(".second h3").textContent="Sec"
    }
    if (window.matchMedia("(max-width: 568px)").matches)
      {
       mobileview();
      };
    // Set the target date
    const targetDate = new Date("May 21, 2025 00:00:00").getTime();

    // Update the countdown every second
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the DOM elements
      document.querySelector(".days").textContent = days;
      document.querySelector(".hours").textContent = hours;
      document.querySelector(".minutes").textContent = minutes;
      document.querySelector(".seconds").textContent = seconds;

      // If the countdown is over, display a message
      if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".count").innerHTML = "The date has arrived!";
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="count">
      <h2>Live in</h2>
      <div className="timer">
        <div className="box day">
          <h3>Days</h3>
          <span className="days"></span>
        </div>
        <div className="box hour" >
          <h3>Hours</h3>
          <span className="hours"></span>
        </div>
        <div className="box minute">
          <h3>Minutes</h3>
          <span className="minutes"></span>
        </div>
        <div className="box second">
          <h3>Seconds</h3>
          <span className="seconds"></span>
        </div>
      </div>
      <h2 className="date">24, 25, 26 January 2025</h2>
    </div>
  );
};
