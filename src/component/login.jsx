import { useState } from "react";
import { Button, Form, FormLabel } from "react-bootstrap";

function Login() {
  const [loginState, setLoginState] = useState({
    username: null,
    password: null
  });
  const [errorState, setErrorState] = useState({
    username: "",
    password: ""
  });
  const onChangeUsername = event => {
    setLoginState({ ...loginState, password: event.target.value });
  };
  const submit = () => {
    if (!loginState.username) {
      setErrorState({ username: "Invalid username!", password: "" });
      return;
    }
    if (!loginState.password) {
      setErrorState({ username: "", password: "Invalid username!" });
      return;
    }
    setErrorState({ username: "", password: "" });
    console.log("loginState", loginState);
  };

  return (
    <>
      <FormLabel htmlFor="inputPassword5"></FormLabel>
      <Form.Control
        type="text"
        id="userName"
        onChange={event => onChangeUsername(event)}
      />
      <Form.Control
        type="password"
        id="password"
        onChange={event => onChangePassword(event)}
      />
      {errorState.password && (
        <p className="text-danger">{errorState.password}</p>
      )}
      <Button onClick={() => submit()}>Login</Button>
      <hr />
      {loginState.username}
      <hr />
      {loginState.password}
    </>
  );
}
export default Login;
