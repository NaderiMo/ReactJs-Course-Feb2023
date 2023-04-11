import { useEffect, useRef, useState } from "react";

export default function RenderLogger() {
    const [inputValue, setInputValue] = useState("");
    const inputElement = useRef();
    const count = useRef(0);

    useEffect(() => {
        console.log("render")
        count.current = count.current + 1;
    });

    const handleClick = () => {
        inputElement.current.focus();
    }

    return (
        <>
            <input
                ref={inputElement}
                type="text" value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() =>handleClick()}>Click</button>
            <h1>Rendered count:{count.current}</h1>
        </>
    )

}