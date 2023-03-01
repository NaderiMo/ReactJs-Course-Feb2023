import { Button,Form } from "react-bootstrap";

function Login(){
    return (<>
    <Form.Label>Password</Form.Label>
    <Form.Control
    type="text"
    id="userName"/>
    <Form.Control 
    type="password"
    id="password"/>
    <Button>login</Button>
    </>)
}
export default Login;