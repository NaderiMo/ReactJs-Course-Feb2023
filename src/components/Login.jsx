import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

function Login() {
    const defaultErrorState = {
        userNameError: null,
        passwordError: null
    }

    const [loginState, setLoginState] = useState({
        userName: null,
        password: null
    })
    const [errorState, setErrorState] = useState(defaultErrorState)

    const onChangeUsername = (event) => {
        setLoginState({ ...loginState, userName: event.target.value })

    }
    const onChangePassword = (event) => {
        setLoginState({ ...loginState, password: event.target.value })

    }
    const submit = () => {
        if (!loginState.userName) {
            setErrorState({ userNameError: "invalid userName!", passwordError: "" })
            return;
        }
        if (!loginState.password) {
            setErrorState({ passwordError: "invalid password!", userNameError: "" })
            return;
        }
        setErrorState(defaultErrorState);

        axios.post("https://6404753c3bdc59fa8f39554b.mockapi.io/users", loginState)
            .then((res) => { debugger; })
            .catch((err) => { debugger; })

    }

    return (
        <>
            <Form.Label >login form</Form.Label>
            <Form.Control type="text" id="userName" onChange={(event) => onChangeUsername(event)} />
            {errorState.userNameError && <p className="text-danger">{errorState.userNameError}</p>}
            <Form.Control type="password" id="password" onChange={(event) => onChangePassword(event)} />
            {errorState.passwordError && <p className="text-danger">{errorState.passwordError}</p>}
            <Button onClick={() => submit()}>Login</Button>
            {/* <hr /> */}
            {/* {loginState.userName} */}
            {/* <hr /> */}
            {/* {loginState.password} */}

        </>
    )
}

export default Login;