import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { click } from "@testing-library/user-event/dist/click";

export default function Login() {
  const [name, setUserName] = useState();

  const clickHandler = (userName) => {
    console.log(userName);
    setUserName(userName);
  };
  return (
    <>
      <Form.Label htmlFor="inputPassword5">userName</Form.Label>
      <Form.Control type="text" id="userName" />

      <Form.Label>passWord</Form.Label>
      <Form.Control type="passWord" id="passWord" />
      <Button
      // onClick={(userName) => {
      //   clickHandler(userName);
      // }}
      >
        Login
      </Button>
    </>
  );
}
