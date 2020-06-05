import React from "react";
import Time from "./Time";

function Wave() {
  let timeOfDay = new Date();
  let currentHour = timeOfDay.getHours();

  if (currentHour >= 5 && currentHour <= 11) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour <= 17) {
    timeOfDay = "afternoon";
  } else if (currentHour >= 18 && currentHour <= 20) {
    timeOfDay = "evening";
  } else if (currentHour >= 21 && currentHour <= 4) {
    timeOfDay = "night";
  }

  return (
    <div id="spacing">
      <p className="time">
        <Time />
      </p>
      <h1 className="greeting">
        <span className="wave" role="img" aria-label="Hi">
          👋
        </span>{" "}
        Good {timeOfDay}, Team!
      </h1>
    </div>
  );
}

export default Wave;
