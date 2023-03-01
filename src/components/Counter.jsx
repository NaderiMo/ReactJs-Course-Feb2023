import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0)

    const handleClickCount = () => {
        const newCount = count + 1
        setCount(newCount)
    }

    return(
        <div>
            <button onClick={() => handleClickCount()}>{count}</button>
        </div>
    )
}

export default Counter;