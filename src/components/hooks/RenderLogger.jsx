import { useState, useEffect, useRef } from "react";
export default function RenderLogger() {

    const [inputValue, setInputValue] = useState("");

    const count = useRef(0);
    const inputElement = useRef();

    useEffect(

        () => {
            console.log("render")
            count.current = count.current + 1;
        }
    );

    const handleClick = () => {
        inputElement.current.focus();
    }

    return (
        <>
            <input
                ref={inputElement}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={() => handleClick()}>Click</button>
            <h1>Render Count: {count.current}</h1>
        </>
    )
}