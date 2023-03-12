import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import axios from "axios";
import req from "../configs/requests";

function Login() {
    const defaultErrorState = {
        userNameError: null,
        passwordError: null
    }

    const [isLoading, setIsLoading] = useState(false)
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
        setIsLoading(true)
        axios.defaults.baseURL = "https://6404753c3bdc59fa8f39554b.mockapi.io";
        axios.defaults.timeout = 20;

        // axios.post("/users", loginState)
        //     .then((res) => { setIsLoading(false) })
        //     .catch((err) => { setIsLoading(false); })

        // use custom config not default
        //  const config = {
        //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        // }
        //  axios.post("/users", loginState, config)
        //     .then((res) => { setIsLoading(false) })
        //     .catch((err) => { setIsLoading(false); }) 

        //use axios instanse
        req.post("/users", loginState)
            .then((res) => { setIsLoading(false) })
            .catch((err) => { setIsLoading(false); })

    }

    return (
        <>
            <Form.Label >login form</Form.Label>
            <Form.Control type="text" id="userName" onChange={(event) => onChangeUsername(event)} />
            {errorState.userNameError && <p className="text-danger">{errorState.userNameError}</p>}
            <Form.Control type="password" id="password" onChange={(event) => onChangePassword(event)} />
            {errorState.passwordError && <p className="text-danger">{errorState.passwordError}</p>}
            {isLoading
                ? <Spinner animation="border" />
                : <Button onClick={() => submit()}>Login</Button>}

            {/* <hr /> */}
            {/* {loginState.userName} */}
            {/* <hr /> */}
            {/* {loginState.password} */}

        </>
    )
}

export default Login;