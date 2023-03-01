import { Button, Form } from "react-bootstrap";

function Login() {

    return (
        <>
            <Form.Label >login form</Form.Label>
            <Form.Control type="test" id="userName" />
            <Form.Control type="password" id="password" />
            <Button>Login</Button>
        </>
    )
}

export default Login;