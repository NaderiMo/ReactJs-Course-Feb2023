import { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import req from "../configs/requests";
import Clock from "./Clock";

function Login() {
  const defaultError = {
    username: "",
    password: "",
  };
  const [loginState, setLoginState] = useState({
    defaultError,
  });

  const [errorState, setErrorState] = useState({
    username: null,
    password: null,
  });

  const [isLoading, setIsLoadState] = useState(false);

  const onChangUserName = (event) => {
    setLoginState({ ...loginState, username: event.target.value });
  };

  const onChangPassword = (event) => {
    setLoginState({ ...loginState, password: event.target.value });
  };

  const submit = () => {
    // debugger;
    if (!loginState.username) {
      setErrorState({ username: "Invalid username" });
      console.log("log: ", errorState);
      return;
    }
    if (!loginState.password) {
      setErrorState({ password: "Invalid password" });
      return;
    }

    if(isLoading) return;//ignore other requests till is loading turn to false

    setErrorState({ loginState });
    console.log("log: ", errorState);
    setIsLoadState(true);

    // axios.defaults.baseURL = "https://6404754a80d9c5c7bac840cc.mockapi.io";
    // axios.defaults.timeout = 3000;
    req
      .post("/users", loginState)
      .then((res) => {
        setIsLoadState(false);
        // debugger;
        document.getElementById("say").innerText=res.data.name
      })
      .catch((err) => {
        setIsLoadState(false);
        // debugger;
      });
  };

  return (
    <>
      <Form.Label id="lbl1">userName</Form.Label>
      <Form.Control
        type="text"
        id="userName"
        onChange={(event) => onChangUserName(event)}
      />
      {errorState.username && (
        <p className="text-denger">{errorState.username}</p>
      )}
      <Form.Label id="lbl2">Password</Form.Label>

      <Form.Control
        type="password"
        id="password"
        onChange={(event) => onChangPassword(event)}
      />
      {errorState.password && (
        <p className="text-denger">{errorState.password}</p>
      )}
      {isLoading ? (
        <Spinner animation="border" />
      ) : (
        <Button className="btn btn-success" id="btn" onClick={() => submit()}>
          login
        </Button>
      )}
      <hr />
      {loginState.username}
      <hr />
      {loginState.password}
      <h1 id="say"></h1>
      <h1>
        <Clock />
      </h1>
    </>
  );
}
export default Login;
