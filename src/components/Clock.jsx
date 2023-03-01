import { useState } from "react";

function Clock({ cardNo, type }) {
    const [date, setDate] = useState(new Date())
    setInterval(()=>{
        setDate(new Date())
    }, 1000)
    return (
        <div>
            <h1>{date.toLocaleTimeString()}</h1>
            <p>{type}</p>
            <hr />
        </div >)
}

export default Clock;