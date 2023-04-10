import { useState } from "react";
import { Button } from "react-bootstrap";

export default function CheckUseState() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen((prevValue) => !prevValue);
    }
    return (
        <>
            {isOpen ? "true" : "false"}
            <Button onClick={() => handleClick()}>Click</Button>
        </>
    )

}