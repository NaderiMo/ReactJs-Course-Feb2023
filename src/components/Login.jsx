import { useState } from "react";

function Login({ cardNo, type }) {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        const contplus = count + 1;
        setCount(contplus)
    }

    return (
        <>
            <Form.label htmlFor="inputPassword" >Password</Form.label>
            <Form.control
                type="text"
                id="userName"
            />
            <form.control
                type="password"
                id="password"
            />

            <button >Login</button>

        </>
    )
}

export default Login;