import { useState } from "react";

function Clock() {

    const [clock, setClock] = useState();

    let clk = new Date().toLocaleTimeString();

    setInterval(() => {
        setClock(new Date().toLocaleTimeString())
    }, 1000);

    return (
        <div>
            <h1 style={backgroundColor = 'aqua'}> {clock}</h1>
            <hr />
        </div>
    )
}
export default Clock;