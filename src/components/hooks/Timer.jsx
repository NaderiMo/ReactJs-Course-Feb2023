import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(count);
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return <h1>rendered {count} times!</h1>

}