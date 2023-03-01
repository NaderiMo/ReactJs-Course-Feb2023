import { useState } from "react";
import "./Clock.css"
function Clock() {
    const [date, setDate] = useState(new Date())

    setInterval(() => {
        setDate(new Date())
    }, 1000);

    // let date = new Date()
    // setInterval(() => {
    //     date = new Date()
    // }, 1000);
    
    const h1Style = { backgroundColor: '#ffcc00' }

    return (<div>
        <h1 style={h1Style} className="clock">{date.toLocaleTimeString()}</h1>
    </div>)
}
export default Clock;