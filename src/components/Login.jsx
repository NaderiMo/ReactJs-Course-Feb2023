import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import req from "../configs/requests";

export default function Login() {
  const [loginState, setLoginState] = useState({
    userName: null,
    passWord: null,
  });

  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    req
      .post("/users", loginState)
      .then((res) => {
        const user = res.data;
        const status = res.status;
        setIsLoading(false);

        setResponseState({
          userName: loginState.userName,
          submitStatus: status,
        });
      })
      .catch((res) => {
        setIsLoading(false);
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

      {isLoading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <Button
          onClick={() => {
            submit();
          }}
        >
          Register
        </Button>
      )}

      {responseState.submitStatus === "201" && (
        <p className="text-warn">
          {responseState.userName} userName created successfully.
        </p>
      )}
    </>
  );
}
