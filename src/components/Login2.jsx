/*
 * Login Request with axios instance (req)
 */

import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import req from "../configs/requests";

function Login2() {
  const [isLoading, setIsLoading] = useState(false);
  const [loginState, setLoginState] = useState({
    username: null,
    password: null,
  });
  const defaultErrorState = {
    username: "",
    password: "",
  };
  const [errorState, setErrorState] = useState(defaultErrorState);

  const onChangUsername = (event) => {
    setLoginState({ ...loginState, username: event.target.value });
  };

  const onChangePassword = (event) => {
    setLoginState({ ...loginState, password: event.target.value });
  };

  const submit = () => {
    if (!loginState.username) {
      setErrorState({ username: "Invalid Username!", password: "" });
      return;
    }
    if (!loginState.password) {
      setErrorState({ username: "", password: "Invalid Password!" });
      return;
    }
    if (isLoading) return;
    setErrorState(defaultErrorState);

    setIsLoading(true);

    req
      .post("/users", loginState)
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="text"
        id="userName"
        onChange={(event) => onChangUsername(event)}
      />

      {errorState.username && (
        <p className="text-primary">{errorState.username}</p>
      )}
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
      {errorState.password && (
        <p className="text-danger">{errorState.password}</p>
      )}
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <Button className="btn btn-success" onClick={() => submit()}>
          Login
        </Button>
      )}
    </>
  );
}
export default Login2;
