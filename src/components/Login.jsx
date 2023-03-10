import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Login() {
  const [loginState, setLoginState] = useState({
    userName: null,
    passWord: null,
  });

  const baseURL = "https://6408e3ead16b1f3ed6c5a495.mockapi.io";

  const defaultSate = { userName: "", passWord: "" };

  const [errorState, setErrorState] = useState({ defaultSate });

  const [responseState, setResponseState] = useState({
    submitStatus: null,
    userName: null,
  });

  const validateLogin = () => {
    setErrorState(defaultSate);
    setResponseState({ ...responseState, submitStatus: "0" });

    if (!loginState.userName) {
      setErrorState({ userName: "userName is invalid" });
      return false;
    }

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
      .post(baseURL + "/users", loginState)
      .then((res) => {
        console.log(res);
        const user = res.data;
        const status = res.status;
        console.log(user);
        console.log(status);

        setResponseState({
          userName: loginState.userName,
          submitStatus: status,
        });
      })
      .catch((res) => {
        console.log(res);
      });

    console.log(responseState);
  };

  const onUserNameChange = (event) => {
    setLoginState({ ...loginState, userName: event.target.value });
  };

  const onPassWordChange = (event) => {
    setLoginState({ ...loginState, passWord: event.target.value });
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
        Register
      </Button>
      {responseState.submitStatus == "201" && (
        <p className="text-warn">
          {responseState.userName} userName created successfully.
        </p>
      )}
    </>
  );
}
