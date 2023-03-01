import React, { useState } from "react";

export default function Clock() {
  const [date, setDate] = useState(new Date());

  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return <div>{date.toLocaleTimeString()}</div>;
}
