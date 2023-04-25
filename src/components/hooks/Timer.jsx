import { useEffect, useState } from "react";

export default function Timer() {

    const [count, setCount] = useState(0);
    useEffect(() => {
        const aaa = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
        return () => {
            clearTimeout(aaa)
        }
    });
    return <h1>rendered {count} times!</h1>;

}