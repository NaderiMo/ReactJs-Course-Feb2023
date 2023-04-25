import { useState } from "react"

export default function CheckUseState() {

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen((lastState) => setIsOpen(!lastState))
    }

    return <>
        {isOpen ? "is true" : " is false"}
        <button onClick={() => handleClick()}>Click</button>
        
    </>

}