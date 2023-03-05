import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Login() {
  const [loginState, setLoginSate] = useState({
    userName: null,
    passWord: null,
  });

  const defaultSate = { userName: "", passWord: "" };

  const [errorState, setErrorState] = useState({ defaultSate });

  const [responseState, setResponseSate] = useState({
    responseCode: "",
    responseDesc: "",
  });

  const validateLogin = () => {
    if (!loginState.userName) {
      setErrorState({ userName: "userName is invalid" });
      return false;
    }
    // setErrorState(defaultSate);

    if (!loginState.passWord) {
      setErrorState({ passWord: "passWord is invalid" });
      return false;
    }
    setErrorState(defaultSate);
    return true;
  };

  const submit = () => {
    if (!validateLogin()) return;

    axios
      .post("https://6404753c3bdc59fa8f39554b.mockapi.io/users", loginState)
      .then((res) => {
        console.log(res);
        // setResponseSate(res);
      })
      .catch((res) => {
        console.log(res);
        // setResponseSate(res);
      });
  };

  const onUserNameChange = (event) => {
    setLoginSate({ ...loginState, userName: event.target.value });
  };

  const onPassWordChange = (event) => {
    setLoginSate({ ...loginState, passWord: event.target.value });
  };
  return (
    <>
      <Form.Label htmlFor="inputPassword5">userName</Form.Label>
      <Form.Control
        type="text"
        id="userName"
        onChange={(event) => {
          onUserNameChange(event);
        }}
      />
      {errorState.userName && (
        <p className="text-danger">{errorState.userName}</p>
      )}

      <Form.Label>passWord</Form.Label>
      <Form.Control
        type="passWord"
        id="passWord"
        onChange={(event) => {
          onPassWordChange(event);
        }}
      />
      {errorState.passWord && (
        <p className="text-danger">{errorState.passWord}</p>
      )}
      <Button
        onClick={() => {
          submit();
        }}
      >
        Login
      </Button>
    </>
  );
}
