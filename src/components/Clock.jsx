import { useState } from 'react';

function Clock(){
    const [date, setDate] = useState(new Date())

    setInterval(
        () => {setDate(new Date())
                console.log(date)}, 1000
    )

    const h1Style = {backgrounColor: '#ffcc00'}
    
    return(
        <div>
            <h1 style={h1Style}>{date.toLocaleTimeString()}</h1>
            <hr />
            <hr />
        </div>
    )
}



export default Clock;