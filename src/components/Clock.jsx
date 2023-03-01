import { useState } from "react";

function Clock({ cardNumber, type }) {
    const [date, setDate] = useState(new Date())
    
    setInterval(() => {
        setDate(new Date())
    }, 1000);

    // let date = new Date()
    // setInterval(() => {
    //     date = new Date()
    // }, 1000);
    
    return (<div>
        <h1>{date.toLocaleTimeString()}</h1>
    </div>)
}
export default Clock;