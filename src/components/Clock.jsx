import { useState } from "react";

function Clock({}) {
    const [date,setDate]=useState(new Date())
    setInterval(()=>{
        setDate(new Date())
    },1000);
    const h1Style={backgroundColer:'#ffcc00'}
    return(<div>
        <h1 style={h1Style} className={Clock}>{date.toLocaleTimeString()}</h1>
      
    </div>)
    
}
export default Clock;