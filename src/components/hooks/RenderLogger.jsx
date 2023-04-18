import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function RenderLogger() {
    const [inputValue,setInputValue]=useState("");
    const count=useRef(0);
    const inputElement=useRef();

    useEffect(()=>{
        count.current=count.current+1;

    });

    return(

        <>
         <input type="text" value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}/>
         <input ref={inputElement} value={inputValue}
         onChange={(e) => setInputValue(e.target.value)}/>
         <h1>Render Count : {count.current}</h1>
    </>
    );
}