import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);
  const t = useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return () => {
    clearTimeout(t);
  };
}
