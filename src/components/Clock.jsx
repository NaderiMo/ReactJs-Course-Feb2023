import { useState } from "react";
import './clock.css';

const myInlineStyle =  {backgroundColor:'yellow'}
function Clock() {
    const [date, setDate] = useState(new Date());
    setInterval(() => {
        setDate(new Date())
    }, 1000);
    return(
        <div>
            <h1 className="clock" style={{backgroundColor:'red'}}>{date.toLocaleTimeString()}</h1>
            {/* <h1 className="clock" style={myInlineStyle}>{date.toLocaleTimeString()}</h1> */}
        </div>
    )
}

export default Clock;