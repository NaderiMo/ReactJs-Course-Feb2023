import { useEffect, useState } from "react";

export default function Timer() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });
    return <h1>rendered {count} times!</h1>;

}