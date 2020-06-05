import React, { useState, useEffect } from "react";
import { oneOf } from "prop-types";

function Time(props) {
  const [time, setTime] = useState(new Date());
  const locale = "en-US";
  const [hour] = useState(props.hour);
  const options = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hourCycle: `h${hour}`,
    timeStyle: "medium",
    dateStyle: "full"
  };
  const prettyTime = new Intl.DateTimeFormat(locale, options)
    .format(time)
    .replace("at", "-");

  useEffect(() => {
    this.interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
      clearInterval(this.interval);
    };
  });

  return prettyTime;
}

Time.propTypes = {
  hour: oneOf([12, 24])
};

Time.defaultProps = {
  hour: 12
};

export default Time;
