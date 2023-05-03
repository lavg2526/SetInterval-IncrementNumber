import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime((time) => (time += 1));
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return <span> {time} </span>;
};
export default Clock;
