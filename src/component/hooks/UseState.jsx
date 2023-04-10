import { useState } from "react"

export default function CheckUseState(){
    const [isOpen,setIsOpen]=useState(false);
    const handlClck = () => {
        setIsOpen((lastState) => setIsOpen(!lastState))
    }
return <>
{isOpen ? "true":"false"}
<button onClick={()=>handlClck()}>click</button>
</>
}