import { useState } from "react";

function Clock({cardNumber, type}){
    const [date, setDate] = useState(new Date());
    setInterval(() => {
        setDate(new Date());
    }, 1000);
     return(<div>
        <h1>{date.toLocaleDateString}</h1>
     </div>)

}

export default Clock();