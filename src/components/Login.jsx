import axios from "axios";
import { useState } from "react";
import { Button, Form } from 'react-bootstrap';

function Login() {

    const [loginState, setLoginState] = useState({
        username: null,
        password: null
    })
    const defaultErrorState = {
        username: "",
        password: ""
    }
    const [errorState, setErrorState] = useState(defaultErrorState)

    const onChangUsername = (event) => {
        setLoginState({ ...loginState, username: event.target.value })
    }

    const onChangePassword = (event) => {
        setLoginState({ ...loginState, password: event.target.value })
    }

    const submit = () => {
        if (!loginState.username) {
            setErrorState({ username: "Invalid Username!", password: "" })
            return;
        }
        if (!loginState.password) {
            setErrorState({ username: "", password: "Invalid Password!" })
            return;
        }
        setErrorState(defaultErrorState)

        // axios.get("api endpoint",data).then((res)=>{}).catch((error)=>{})
        axios.post("https://6404753c3bdc59fa8f39554b.mockapi.io/users", loginState)
            .then((res) => { debugger; })
            .catch((err) => { debugger; })

    }

    return (<>
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
            type="text"
            id="userName"
            onChange={(event) => onChangUsername(event)}
        />

        {errorState.username && <p className="text-primary">{errorState.username}</p>}
        {/* Note:
        ===============
        {if statement ? Do when true : Do when false}
        {if statement && Do when true}
      */}
        <Form.Control
            type="password"
            id="password"
            onChange={(event) => onChangePassword(event)}
        />
        {errorState.password && <p className="text-danger">{errorState.password}</p>}
        <Button className="btn btn-success" onClick={() => submit()}>Login</Button>

    </>)
}
export default Login;